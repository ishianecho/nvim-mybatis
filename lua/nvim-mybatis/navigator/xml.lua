local M = {}

local ts = vim.treesitter
local treesitter = require("nvim-mybatis.treesitter")
local index = require("nvim-mybatis.index")
local utils = require("nvim-mybatis.utils")
local logger = require("nvim-mybatis.logger")
local parser = require("nvim-mybatis.parser")

local function strip_quotes(value)
	return value:gsub("['\"]", "")
end

--- walk a dotted field path into entity classes, jumping to the last field
--- @param classname string entity type the path starts from
--- @param segments string[] field path, the last segment is the jump target
--- @return boolean
local function navigate_entity_fields(classname, segments)
	local fqn = utils.resolve_class(classname)
	if not fqn then
		return false
	end
	for i, segment in ipairs(segments) do
		local bufnr = utils.load_java_buffer(fqn)
		if not bufnr then
			return false
		end
		if i == #segments then
			return treesitter.locate(treesitter.query.field(segment), bufnr)
		end
		local next_type = treesitter.scan.field_types(bufnr)[segment]
		if not next_type then
			return false
		end
		fqn = utils.resolve_class(next_type)
		if not fqn then
			return false
		end
	end
	return false
end

--- collect the formal parameters of a method_declaration node
--- @param method_node TSNode
--- @param bufnr integer
--- @return { name: string?, annotation: string?, name_node: TSNode, type: string? }[] params
local function formal_parameters(method_node, bufnr)
	local params = {}
	local parameters = method_node:field("parameters")[1]
	if not parameters then
		return params
	end
	for child in parameters:iter_children() do
		if child:type() == "formal_parameter" then
			local name_node = child:field("name")[1]
			local type_node = child:field("type")[1]
			table.insert(params, {
				name = name_node and ts.get_node_text(name_node, bufnr) or nil,
				annotation = ts.get_node_text(child, bufnr):match('@Param%s*%(%s*"([^"]+)"%s*%)'),
				name_node = name_node,
				type = type_node and treesitter.extract.parse_java_type(type_node, bufnr) or nil,
			})
		end
	end
	return params
end

--- the `#{}` / `${}` parameter containing the cursor, from the current line
--- (fallback when the grammar has no parameter node)
--- @return string? path
local function parameter_at_cursor()
	local _, col = unpack(vim.api.nvim_win_get_cursor(0))
	local line = vim.api.nvim_get_current_line()
	local init = 1
	while true do
		local start, finish = line:find("[#%$]{[^}]*}", init)
		if not start then
			return nil
		end
		if col + 1 > start + 1 and col + 1 <= finish then
			return line:sub(start + 2, finish - 1)
		end
		init = finish + 1
	end
end

--- jump from a `#{}` parameter path to the java method parameter or entity field
--- @param path string dotted parameter path, e.g. `user.profile`
--- @param namespace string mapper namespace
--- @param statement_id string statement `id`
--- @param parameter_type? string `parameterType` of the statement
--- @return boolean
local function navigate_param(path, namespace, statement_id, parameter_type)
	local segments = {}
	for segment in path:gmatch("[^%.]+") do
		table.insert(segments, segment)
	end
	local filepath = namespace:gsub("%.", "/") .. ".java"
	local opened = utils.foreach_classpath(function(classpath)
		local full = classpath .. filepath
		if vim.fn.filereadable(full) ~= 1 then
			return false
		end
		vim.cmd("edit " .. vim.fn.fnameescape(full))
		return true
	end, "java")
	if not opened then
		logger.warn("No java mapper found for namespace: " .. namespace)
		return false
	end
	local bufnr = vim.api.nvim_get_current_buf()
	local qry = treesitter.query.method_declaration(statement_id)
	local parsed = treesitter.query.parse(qry)
	for id, method_node in treesitter.query.iter_query(bufnr, qry.lang, parsed) do
		if parsed.captures[id] == "method" then
			local params = formal_parameters(method_node, bufnr)
			for _, param in ipairs(params) do
				if param.name == segments[1] or param.annotation == segments[1] then
					if #segments == 1 and param.name_node then
						local row, col = param.name_node:range()
						vim.api.nvim_win_set_cursor(0, { row + 1, col })
						return true
					end
					return param.type ~= nil
							and navigate_entity_fields(param.type, { unpack(segments, 2) })
						or false
				end
			end
			if parameter_type and navigate_entity_fields(parameter_type, segments) then
				return true
			end
			if #params == 1 and params[1].type then
				return navigate_entity_fields(params[1].type, segments)
			end
			return false
		end
	end
	return false
end

--- jump to a `<sql id>` fragment, in this buffer or through the index
--- @param refid string
--- @return boolean
local function navigate_refid(refid)
	local target = index.sql_fragment(refid, vim.api.nvim_buf_get_name(0))
	if not target then
		logger.warn("No <sql> fragment found for refid: " .. refid)
		return false
	end
	if vim.fs.normalize(target.path) == vim.fs.normalize(vim.api.nvim_buf_get_name(0)) then
		return treesitter.locate(treesitter.query.sqlid(target.id))
	end
	vim.cmd("edit " .. vim.fn.fnameescape(target.path))
	return treesitter.locate(treesitter.query.sqlid(target.id))
end

--- jump to a `<resultMap id>` definition in this buffer
--- @param name string
--- @return boolean
local function navigate_result_map(name)
	return treesitter.locate(treesitter.query.resultMap(name))
end

--- from xml to java
--- @param bufnr integer
--- @return boolean
function M.navigate_from_xml(bufnr)
	local ok, node = pcall(ts.get_node, { bufnr = bufnr, lang = parser.lang() })
	if not ok or not node then
		return false
	end
	-- if the cursor on `namespace` attribute
	local clsname = treesitter.extract.classname(node, bufnr)
	if clsname then
		return treesitter.navigate(clsname:gsub("%.", "/") .. ".java", treesitter.query.interface())
	end
	-- if the cursor on sql tag and `id` attribute
	local crud_id = treesitter.extract.crud_id(node, bufnr)
	if crud_id then
		local current_namespace = treesitter.extract.belong_namespace(node, bufnr)
		if current_namespace then
			return treesitter.navigate(
				current_namespace:gsub("%.", "/") .. ".java",
				treesitter.query.method(crud_id)
			)
		end
	end
	-- if the cursor on `refid` attribute
	local refid = treesitter.extract.refid(node, bufnr)
	if refid then
		return navigate_refid(refid)
	end
	-- if the cursor inside a `#{}` / `${}` parameter
	local param_path = treesitter.extract.parameter(node, bufnr) or parameter_at_cursor()
	if param_path then
		local statement_id = treesitter.extract.statement_id(node, bufnr)
		local current_namespace = treesitter.extract.belong_namespace(node, bufnr)
		if statement_id and current_namespace then
			return navigate_param(
				param_path,
				current_namespace,
				statement_id,
				treesitter.extract.parameter_type(node, bufnr)
			)
		end
	end
	-- if the cursor on `resultMap` / `extends` attributes
	local attr_node = node
	while attr_node and attr_node:type() ~= "Attribute" do
		attr_node = attr_node:parent()
	end
	if attr_node then
		local attr_name = attr_node:named_child(0)
		if attr_name then
			local name = ts.get_node_text(attr_name, bufnr)
			if name == "resultMap" or name == "extends" then
				local value = attr_node:named_child(1)
				if value then
					return navigate_result_map(strip_quotes(ts.get_node_text(value, bufnr)))
				end
			end
		end
	end
	-- if the cursor on `property` attribute
	local type_value, property = treesitter.extract.property(node, bufnr)
	if type_value and property then
		return treesitter.navigate(
			type_value:gsub("%.", "/") .. ".java",
			treesitter.query.field(property)
		)
	end
	return false
end

return M

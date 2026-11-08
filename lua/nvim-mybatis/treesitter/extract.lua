--- `extract` searches upward from the given TSNode for mapper data
--- @module 'nvim-mybatis.treesitter.extract'
local M = {}

local ts = vim.treesitter
local constants = require("nvim-mybatis.constants")
local element = require("nvim-mybatis.treesitter.element")

--- extract class name
--- @param node TSNode
--- @param bufnr integer
--- @return string? namespace
function M.classname(node, bufnr)
	local current = node
	while current do
		if current:type() == "Attribute" then
			local name_node = current:named_child(0)
			if name_node then
				local name_text = ts.get_node_text(name_node, bufnr)
				if vim.tbl_contains(constants.TYPE_ATTRIBUTES, name_text) then
					local value_node = current:named_child(1)
					if value_node then
						return ts.get_node_text(value_node, bufnr):gsub("['\"]", "")
					end
				end
			end
		end
		current = current:parent()
	end
	return nil
end

--- get sql id name
--- @param node TSNode
--- @param bufnr integer
--- @return string? method
function M.crud_id(node, bufnr)
	local current = node
	while current and current:type() ~= "Attribute" do
		current = current:parent()
	end
	if not current then
		return nil
	end
	local name = current:named_child(0)
	if not name or ts.get_node_text(name, bufnr) ~= "id" then
		return nil
	end
	local elem = element.enclosing_tag(current)
	local tag = elem and element.element_name(elem, bufnr) or nil
	if not tag or not vim.tbl_contains(constants.STATEMENT_TAGS, tag) then
		return nil
	end
	local value = current:named_child(1)
	if not value then
		return nil
	end
	return ts.get_node_text(value, bufnr):gsub("['\"]", "")
end

--- get the ancestor namespace name of node
--- @param node TSNode
--- @param bufnr integer
--- @return string?
function M.belong_namespace(node, bufnr)
	local current = node
	while current do
		if element.is_element_node(current) then
			local tag = element.element_name(current, bufnr)
			if vim.tbl_contains(constants.ROOT_TAGS, tag or "") then
				return element.attribute_of(current, bufnr, "namespace")
			end
		end
		current = current:parent()
	end
	return nil
end

--- @param node TSNode
--- @param bufnr integer
--- @return string?
function M.refid(node, bufnr)
	local current = node
	while current do
		if current:type() == "Attribute" then
			local name_node = current:named_child(0)
			if name_node and ts.get_node_text(name_node, bufnr) == "refid" then
				local elem = element.enclosing_tag(current)
				local tag = elem and element.element_name(elem, bufnr) or nil
				if tag ~= "include" then
					return nil
				end
				local value_node = current:named_child(1)
				if value_node then
					return ts.get_node_text(value_node, bufnr):gsub("['\"]", "")
				end
			end
			return nil
		end
		current = current:parent()
	end
	return nil
end

--- the value of `name` on the nearest statement element enclosing `node`
--- @param node TSNode
--- @param bufnr integer
--- @param name string attribute name
--- @return string?
local function statement_attribute(node, bufnr, name)
	local current = node
	while current do
		if element.is_element_node(current) then
			local tag = element.element_name(current, bufnr)
			if vim.tbl_contains(constants.STATEMENT_TAGS, tag or "") then
				return element.attribute_of(current, bufnr, name)
			end
		end
		current = current:parent()
	end
	return nil
end

--- the `parameterType` of the statement element enclosing `node`
--- @param node TSNode
--- @param bufnr integer
--- @return string?
function M.parameter_type(node, bufnr)
	return statement_attribute(node, bufnr, "parameterType")
end

--- the `id` of the statement element enclosing `node`
--- @param node TSNode
--- @param bufnr integer
--- @return string?
function M.statement_id(node, bufnr)
	return statement_attribute(node, bufnr, "id")
end

--- resolve the enclosing `#{...}` / `${...}` / `#...#` parameter of `node`
--- @param node TSNode
--- @param bufnr integer
--- @return string? path the full parameter path (e.g. `user.profile.id`)
function M.parameter(node, bufnr)
	local current = node
	while current do
		local text = ts.get_node_text(current, bufnr)
		if text:match("^[%$#]{") or (text:sub(1, 1) == "#" and text:find("#", 2)) then
			return text:match("^%${(.-)}$") or text:match("^#{(.-)}$") or text:match("^#(.-)#$")
		end
		current = current:parent()
	end
	return nil
end

--- @param node TSNode
--- @param bufnr integer
--- @return string? namespace
--- @return string? property
function M.property(node, bufnr)
	local property_value
	local current = node

	while current do
		if current:type() == "Attribute" then
			local name_node = current:named_child(0)
			if name_node and ts.get_node_text(name_node, bufnr) == "property" then
				local value_node = current:named_child(1)
				if value_node then
					property_value = ts.get_node_text(value_node, bufnr):gsub("['\"]", "")
					break
				end
			end
		end
		current = current:parent()
	end

	if not property_value then
		return nil, nil
	end

	while current do
		if element.is_element_node(current) then
			local tag = element.element_name(current, bufnr)
			if tag == "resultMap" then
				return element.attribute_of(current, bufnr, "type"), property_value
			end
		end
		current = current:parent()
	end

	return nil, nil
end

--- the name of the enclosing java type declaration
--- @param node TSNode
--- @param bufnr integer
--- @return string? class
function M.enclosing_class(node, bufnr)
	local current = node
	while current do
		local node_type = current:type()
		if
			node_type == "class_declaration"
			or node_type == "interface_declaration"
			or node_type == "record_declaration"
			or node_type == "enum_declaration"
		then
			local name = current:field("name")[1]
			return name and ts.get_node_text(name, bufnr) or nil
		end
		current = current:parent()
	end
	return nil
end

--- the field name of the enclosing field_declaration
--- @param node TSNode
--- @param bufnr integer
--- @return string? field
function M.field(node, bufnr)
	local current = node
	while current and current:type() ~= "field_declaration" do
		current = current:parent()
	end
	if not current then
		return nil
	end
	local declarator = current:field("declarator")[1]
	local name = declarator and declarator:field("name")[1]
	return name and ts.get_node_text(name, bufnr) or nil
end

--- @param node TSNode
--- @param bufnr integer
--- @return string? interface
--- @return string? method
function M.interface_method(node, bufnr)
	local interface, method
	local current = node

	while current do
		local node_type = current:type()
		if not interface and node_type == "interface_declaration" then
			interface = ts.get_node_text(current:field("name")[1], bufnr)
		end
		if not method and node_type == "method_declaration" then
			method = ts.get_node_text(current:field("name")[1], bufnr)
		end
		if interface and method then
			return interface, method
		end
		current = current:parent()
	end

	return interface, method
end

--- simplify a java type node to the class name it denotes
--- @param type_node TSNode
--- @param bufnr integer
--- @return string?
local function parse_type(type_node, bufnr)
	local node_type = type_node:type()
	if node_type == "type_identifier" then
		return ts.get_node_text(type_node, bufnr)
	elseif node_type == "generic_type" then
		local container_node = type_node:named_child(0)
		if not container_node then
			return nil
		end
		local container_name = ts.get_node_text(container_node, bufnr)
		local type_args_node = type_node:named_child(1)
		if not type_args_node then
			return container_name
		end
		if container_name == "List" or container_name == "Set" then
			local first_arg = type_args_node:named_child(0)
			return first_arg and parse_type(first_arg, bufnr) or nil
		elseif container_name == "Map" then
			local value_arg = type_args_node:named_child(1)
			return value_arg and parse_type(value_arg, bufnr) or nil
		else
			return container_name
		end
	end

	return nil
end

--- simplify a java type node
M.parse_java_type = parse_type

--- @param node TSNode
--- @param bufnr integer
--- @return string?
function M.resultType(node, bufnr)
	local method_node = node
	while method_node and method_node:type() ~= "method_declaration" do
		method_node = method_node:parent()
	end
	if not method_node then
		return nil
	end
	local type_node = method_node:field("type")[1]
	if not type_node then
		return nil
	end
	return parse_type(type_node, bufnr)
end

return M

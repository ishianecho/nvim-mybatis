--- @module 'nvim-mybatis.index'
--- Mapper XML index: per-file metadata (namespace, sql ids, statement ids,
--- resultMap ids).
local M = {}

local uv = vim.uv or vim.loop
local utils = require("nvim-mybatis.utils")
local constants = require("nvim-mybatis.constants")
local element = require("nvim-mybatis.treesitter.element")
local parser = require("nvim-mybatis.parser")

--- @type table<string, table> path -> { namespace: string?, sql_ids: table<string,integer>, statement_ids: table<string,integer>, result_maps: table<string,integer> }
local entries = {}
--- @type table<string, string> namespace -> path
local namespace_index = {}
local built_for_root = nil
local miss_rebuild_done = false

--- collect minimal metadata from a parsed mapper tree into `entry`
--- @param root TSNode
--- @param source integer|string buffer or document text
--- @param entry table
local function collect(root, source, entry)
	local function walk(node)
		if element.is_element_node(node) then
			local name = element.element_name(node, source)
			if name == "sql" then
				local id = element.attribute_of(node, source, "id")
				if id then
					entry.sql_ids[id] = select(1, node:range())
				end
			elseif name == "resultMap" then
				local id = element.attribute_of(node, source, "id")
				if id then
					entry.result_maps[id] = select(1, node:range())
				end
			elseif vim.tbl_contains(constants.STATEMENT_TAGS, name) then
				local id = element.attribute_of(node, source, "id")
				if id then
					entry.statement_ids[id] = select(1, node:range())
				end
			elseif vim.tbl_contains(constants.ROOT_TAGS, name) then
				entry.namespace = element.attribute_of(node, source, "namespace")
			end
		end
		for child in node:iter_children() do
			if child:named() then
				walk(child)
			end
		end
	end
	walk(root)
end

--- @return table
local function new_entry()
	return { namespace = nil, sql_ids = {}, statement_ids = {}, result_maps = {} }
end

local function index_entry(path, entry)
	local old = entries[path]
	if old and old.namespace and old.namespace ~= entry.namespace then
		if namespace_index[old.namespace] == path then
			namespace_index[old.namespace] = nil
		end
	end
	entries[path] = entry
	if entry.namespace then
		namespace_index[entry.namespace] = path
	end
end

--- read a file's bytes
--- @param path string
--- @return string?
local function read_file(path)
	local fd = uv.fs_open(path, "r", 438)
	if not fd then
		return nil
	end
	local stat = uv.fs_fstat(fd)
	local content = stat and stat.size > 0 and uv.fs_read(fd, stat.size, 0) or ""
	uv.fs_close(fd)
	return content
end

local function candidate(path)
	local basename = vim.fs.basename(path)
	if not basename:match("%.xml$") then
		return
	end
	if not utils.matches_mapper_glob(basename) then
		return
	end
	local content = read_file(path)
	if not content or content == "" then
		return
	end
	local ok, str_parser = pcall(parser.string_parser, content)
	if not ok or not str_parser then
		return
	end
	local ok_parse, tree = pcall(function()
		return str_parser:parse()[1]
	end)
	if not ok_parse or not tree then
		return
	end
	local entry = new_entry()
	collect(tree:root(), content, entry)
	index_entry(path, entry)
end

local function scan_dir(dir)
	local handle = uv.fs_scandir(dir)
	if not handle then
		return
	end
	while true do
		local name, type = uv.fs_scandir_next(handle)
		if not name then
			break
		end
		local path = dir .. "/" .. name
		if type == "directory" then
			local excluded = false
			for _, pattern in ipairs(utils.EXCLUDED_DIRS) do
				if name:match(pattern) then
					excluded = true
					break
				end
			end
			if not excluded then
				scan_dir(path)
			end
		elseif type == "file" then
			candidate(path)
		end
	end
end

local function clear()
	entries = {}
	namespace_index = {}
end

--- build the index for the current project root
local function build()
	clear()
	utils.foreach_classpath(function(classpath)
		local full = classpath:gsub("/$", "")
		if vim.fn.isdirectory(full) == 1 then
			scan_dir(full)
		end
		return false
	end, "resources")
	built_for_root = utils.get_project_root()
end

--- ensure the index exists for the current project root
function M.ensure()
	local root = utils.get_project_root()
	if built_for_root ~= root then
		clear()
		build()
	end
end

--- drop the index
function M.reset()
	clear()
	built_for_root = nil
	miss_rebuild_done = false
end

--- rebuild the entry of `path` from its buffer
--- @param bufnr integer
function M.update_buffer(bufnr)
	local path = vim.api.nvim_buf_get_name(bufnr)
	if path == "" then
		return
	end
	local ok, buf_parser = pcall(parser.get_parser, bufnr)
	if not ok or not buf_parser then
		return
	end
	local tree = buf_parser:parse()[1]
	if not tree then
		return
	end
	local entry = new_entry()
	collect(tree:root(), bufnr, entry)
	index_entry(path, entry)
	built_for_root = utils.get_project_root()
end

local function ensure_fresh()
	M.ensure()
	if not miss_rebuild_done then
		-- one rebuild per session
		miss_rebuild_done = true
		build()
	end
end

--- @param namespace string
--- @return string? path
function M.file_for_namespace(namespace)
	M.ensure()
	local path = namespace_index[namespace]
	if path then
		return path
	end
	ensure_fresh()
	return namespace_index[namespace]
end

--- resolve an `<include refid>` to its `<sql id>` definition
--- @param refid string plain or `namespace.id` qualified
--- @param current_path string? current file path, searched first
--- @return { path: string, id: string }?
function M.sql_fragment(refid, current_path)
	local namespace, id = refid:match("^(.*)%.([^%.]+)$")
	if namespace then
		local path = M.file_for_namespace(namespace)
		if path and entries[path] and entries[path].sql_ids[id] ~= nil then
			return { path = path, id = id }
		end
		return nil
	end
	if current_path and entries[current_path] and entries[current_path].sql_ids[refid] then
		return { path = current_path, id = refid }
	end
	ensure_fresh()
	if current_path and entries[current_path] and entries[current_path].sql_ids[refid] then
		return { path = current_path, id = refid }
	end
	for path, entry in pairs(entries) do
		if entry.sql_ids[refid] then
			return { path = path, id = refid }
		end
	end
	return nil
end

--- all `<sql id>` fragment ids of a file
--- @param path string
--- @return string[]
function M.sql_ids(path)
	M.ensure()
	local entry = entries[path]
	if not entry then
		return {}
	end
	local ids = {}
	for id in pairs(entry.sql_ids) do
		table.insert(ids, id)
	end
	return ids
end

--- paths of all indexed mapper files
--- @return string[]
function M.files()
	M.ensure()
	local paths = {}
	for path in pairs(entries) do
		table.insert(paths, path)
	end
	table.sort(paths)
	return paths
end

local PROPERTY_TAGS = { "id", "result", "association", "collection" }

--- find the resultMap subtag mapping an entity field
--- @param root TSNode
--- @param source string document text
--- @param classname string entity the resultMap `type` refers to
--- @param property string `property` attribute value
--- @return TSNode? node the matching subtag element
local function find_result_property(root, source, classname, property)
	local found
	local function walk(node, in_scope)
		if found then
			return
		end
		if element.is_element_node(node) then
			local name = element.element_name(node, source)
			if name == "resultMap" then
				local type_value = element.attribute_of(node, source, "type")
				if
					type_value
					and (
						type_value == classname
						or classname:match("%." .. vim.pesc(type_value) .. "$") ~= nil
					)
				then
					for child in node:iter_children() do
						if child:named() then
							walk(child, true)
						end
					end
					return
				end
			elseif in_scope and vim.tbl_contains(PROPERTY_TAGS, name or "") then
				if element.attribute_of(node, source, "property") == property then
					found = node
					return
				end
			end
		end
		for child in node:iter_children() do
			if child:named() then
				walk(child, in_scope)
			end
		end
	end
	walk(root, false)
	return found
end

--- find the `<result property>` element mapping an entity field, searching
--- the indexed mapper files
--- @param classname string fully-qualified entity type (simple names also matched)
--- @param property string resultMap subtag `property` attribute
--- @return { path: string, row: integer, col: integer }?
function M.result_property(classname, property)
	for _, path in ipairs(M.files()) do
		local content = read_file(path)
		if content then
			local ok, str_parser = pcall(parser.string_parser, content)
			if ok and str_parser then
				local ok_parse, tree = pcall(function()
					return str_parser:parse()[1]
				end)
				if ok_parse and tree then
					local node = find_result_property(tree:root(), content, classname, property)
					if node then
						local row, col = node:range()
						-- tag nodes of the mybatis grammar start at the end of the
						-- previous sibling; anchor on the tag name instead
						local tag = node:named_child(0)
						if
							tag
							and (vim.endswith(tag:type(), "STag") or tag:type() == "EmptyElemTag")
						then
							local name = tag:named_child(0)
							if name and name:type() == "Name" then
								row, col = name:range()
							end
						end
						return { path = path, row = row, col = col }
					end
				end
			end
		end
	end
	return nil
end

return M

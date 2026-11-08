--- Tree-sitter queries from the root node of a buffer.
local M = {}

local ts = vim.treesitter
local query = require("nvim-mybatis.treesitter.query")

--- @param bufnr integer
--- @return string? pkg_name
function M.package(bufnr)
	local qry = query.package()
	for _, node in query.iter_query(bufnr, qry.lang, query.parse(qry)) do
		return ts.get_node_text(node, bufnr)
	end
	return nil
end

--- collect all method names declared in a java buffer
--- @param bufnr integer
--- @return string[] method names
function M.methods(bufnr)
	local names = {}
	local qry = query.methods()
	for _, node in query.iter_query(bufnr, qry.lang, query.parse(qry)) do
		table.insert(names, ts.get_node_text(node, bufnr))
	end
	return names
end

--- collect all field names declared in a java buffer
--- @param bufnr integer
--- @return string[] field names
function M.fields(bufnr)
	local names = {}
	local qry = query.fields()
	for _, node in query.iter_query(bufnr, qry.lang, query.parse(qry)) do
		table.insert(names, ts.get_node_text(node, bufnr))
	end
	return names
end

--- collect field name -> simplified declared type of a java buffer
--- (`List<User> users` -> `{ users = "User" }`)
--- @param bufnr integer
--- @return table<string, string>
function M.field_types(bufnr)
	local extract = require("nvim-mybatis.treesitter.extract")
	local types = {}
	local qry = query.field_types()
	local parsed = query.parse(qry)
	local pending_type
	for id, node in query.iter_query(bufnr, qry.lang, parsed) do
		if parsed.captures[id] == "field_type" then
			pending_type = extract.parse_java_type(node, bufnr)
		elseif parsed.captures[id] == "field_name" and pending_type then
			types[ts.get_node_text(node, bufnr)] = pending_type
			pending_type = nil
		end
	end
	return types
end

return M

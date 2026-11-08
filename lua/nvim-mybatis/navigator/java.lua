local M = {}

local ts = vim.treesitter
local treesitter = require("nvim-mybatis.treesitter")
local index = require("nvim-mybatis.index")
local logger = require("nvim-mybatis.logger")

--- jump from an entity field to the resultMap subtag mapping it
--- @param bufnr integer
--- @return boolean
local function navigate_field(bufnr)
	local node = ts.get_node({ bufnr = bufnr, lang = "java" })
	if not node then
		return false
	end
	local field = treesitter.extract.field(node, bufnr)
	local class = treesitter.extract.enclosing_class(node, bufnr)
	if not field or not class then
		return false
	end
	if #index.files() == 0 then
		return false
	end
	local package_name = treesitter.scan.package(bufnr)
	local classname = package_name and (package_name .. "." .. class) or class
	local target = index.result_property(classname, field)
	if not target then
		logger.warn("No resultMap property found for: " .. classname .. "." .. field)
		return false
	end
	vim.cmd("edit " .. vim.fn.fnameescape(target.path))
	vim.api.nvim_win_set_cursor(0, { target.row + 1, target.col })
	return true
end

--- from java to xml
--- @param bufnr integer
--- @return boolean
function M.navigate_from_java(bufnr)
	local interface, method = treesitter.extract.interface_method(ts.get_node(), bufnr)
	if not interface then
		return navigate_field(bufnr)
	end
	local package_name = treesitter.scan.package(bufnr)
	local clsname = package_name .. "." .. interface
	return method and treesitter.navigate_mapper(clsname, treesitter.query.crud_id(method))
		or treesitter.navigate_mapper(clsname, treesitter.query.namespace(clsname))
end

return M

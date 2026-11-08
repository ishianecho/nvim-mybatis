--- @module 'nvim-mybatis.navigator'
--- Navigation between Java MyBatis mappers and XML mapping files.

local M = {}

local utils = require("nvim-mybatis.utils")

M.xml = require("nvim-mybatis.navigator.xml")
M.java = require("nvim-mybatis.navigator.java")

--- Navigate from the current MyBatis XML or Java mapper buffer.
--- @param bufnr? integer
--- @return boolean navigated whether a MyBatis target was found
function M.jump(bufnr)
	bufnr = bufnr or vim.api.nvim_get_current_buf()
	if utils.is_mybatis_xml(bufnr) then
		return M.xml.navigate_from_xml(bufnr)
	end
	if vim.bo[bufnr].filetype == "java" and utils.get_module_root() then
		return M.java.navigate_from_java(bufnr)
	end
	return false
end

return M

--- @module 'nvim-mybatis.treesitter'
--- Tree-sitter helpers used by the public navigation API.

local M = {}

local utils = require("nvim-mybatis.utils")
local logger = require("nvim-mybatis.logger")

M.extract = require("nvim-mybatis.treesitter.extract")
M.query = require("nvim-mybatis.treesitter.query")
M.scan = require("nvim-mybatis.treesitter.scan")

--- @param qry mybatis.treesitter.Query
--- @param bufnr? integer
--- @return boolean success
function M.locate(qry, bufnr)
	bufnr = bufnr or vim.api.nvim_get_current_buf()
	if vim.api.nvim_get_current_buf() ~= bufnr then
		vim.api.nvim_set_current_buf(bufnr)
	end
	for _, node in M.query.iter_query(bufnr, qry.lang, M.query.parse(qry)) do
		local row, col = node:range()
		vim.api.nvim_win_set_cursor(0, { row + 1, col })
		return true
	end
	return false
end

--- open and edit `filepath` (relative to classpath), `query` to locate
--- @param filepath string
--- @param query mybatis.treesitter.Query
--- @param msg? string
--- @return boolean
function M.navigate(filepath, query, msg)
	return utils.foreach_classpath(function(classpath)
		if vim.fn.filereadable(classpath .. filepath) == 1 then
			vim.cmd("edit " .. vim.fn.fnameescape(classpath .. filepath))
			if not M.locate(query) then
				logger.warn(msg or "Invalid navigate")
			end
			return true
		end
	end, "java")
end

--- search `namespace`, `query` to locate
--- @param namespace string
--- @param query mybatis.treesitter.Query
--- @param msg? string
--- @return boolean
function M.navigate_mapper(namespace, query, msg)
	local file = utils.search_mapper(namespace)
	if file then
		vim.cmd("edit " .. vim.fn.fnameescape(file))
		if not M.locate(query) then
			logger.warn(msg or "Invalid navigate")
		end
		return true
	end
	return false
end

return M

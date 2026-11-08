--- @module 'nvim-mybatis.parser'
--- Parser resolution: the tree-sitter grammar for mapper XML buffers.
local M = {}

local logger = require("nvim-mybatis.logger")

--- @type boolean?
local mybatis_installed = nil

local function has_mybatis()
	if mybatis_installed == nil then
		mybatis_installed = pcall(vim.treesitter.language.add, "mybatis")
	end
	return mybatis_installed
end

--- the tree-sitter language mapper XML buffers are parsed with
--- @return "mybatis"|"xml"
function M.lang()
	local setting = require("nvim-mybatis.config"):get().parser or "auto"
	if setting == "xml" then
		return "xml"
	end
	if setting == "mybatis" and not has_mybatis() then
		logger.warn("tree-sitter-mybatis parser not installed, falling back to the xml parser")
		return "xml"
	end
	return has_mybatis() and "mybatis" or "xml"
end

--- @param bufnr integer
--- @return vim.treesitter.LanguageTree
function M.get_parser(bufnr)
	return vim.treesitter.get_parser(bufnr, M.lang())
end

--- @param content string
--- @return vim.treesitter.LanguageTree
function M.string_parser(content)
	return vim.treesitter.get_string_parser(content, M.lang())
end

--- attach treesitter highlighting to a mapper xml buffer
--- @param bufnr integer
function M.start(bufnr)
	if M.lang() == "mybatis" then
		pcall(vim.treesitter.start, bufnr, "mybatis")
	else
		pcall(vim.treesitter.start, bufnr)
	end
end

return M

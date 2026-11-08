local M = {}

local treesitter = require("nvim-mybatis.treesitter")
local utils = require("nvim-mybatis.utils")
local logger = require("nvim-mybatis.logger")
local snippet = require("nvim-mybatis.actions.snippet")

--- Core generation function: generate MyBatis tag
--- @param args mybatis.action.CrudTagArgs
function M.generate_crud(args)
	local interface, method, resultType, bufnr
	interface = args.interface
	method = args.method
	resultType = args.resultType or "resultType"
	bufnr = args.bufnr or vim.api.nvim_get_current_buf()
	interface = treesitter.scan.package(bufnr) .. "." .. interface
	local xml_file = utils.search_mapper(interface)
	if not xml_file then
		logger.error("No mapper XML file found for interface: " .. interface)
		return
	end
	local target_bufnr = vim.fn.bufadd(xml_file)
	vim.fn.bufload(target_bufnr)
	if not vim.api.nvim_buf_is_loaded(target_bufnr) then
		logger.error("Failed to load buffer: " .. xml_file)
		return
	end

	local query = treesitter.query.mapper_etag()
	for _, node in
		treesitter.query.iter_query(target_bufnr, query.lang, treesitter.query.parse(query))
	do
		local insert_line = node:range()
		vim.api.nvim_set_current_buf(target_bufnr)
		vim.api.nvim_win_set_cursor(0, { insert_line + 1, 0 })

		vim.snippet.expand(snippet.crud(method, resultType))

		local filename = vim.fn.fnamemodify(xml_file, ":t")
		logger.log(string.format("Generated tag for %s.%s", interface, method, filename))
		break
	end
end

--- TODO: add generate_tag_picker
function M.generate_crud_picker(args) end

--- TODO: add generate_resultMap
function M.generate_resultMap() end

return M

local M = {}

local autocmd = vim.api.nvim_create_autocmd
local utils = require("nvim-mybatis.utils")
local logger = require("nvim-mybatis.logger")

--- Register MyBatis filetype autocmds.
function M.setup()
	local group = vim.api.nvim_create_augroup("NvimMybatis", {})
	autocmd("FileType", {
		pattern = { "xml", "mybatis" },
		group = group,
		callback = function(args)
			local bufnr = args.buf
			if not utils.is_mybatis_file(bufnr) then
				return
			end
			-- attach treesitter highlighting
			require("nvim-mybatis.parser").start(bufnr)
			if require("nvim-mybatis.config"):get().lsp then
				require("nvim-mybatis.lsp").attach(bufnr)
			end
			logger.info("XML file loaded successfully")
		end,
	})
	autocmd("FileType", {
		pattern = "java",
		group = group,
		callback = function(args)
			if utils.get_module_root() and require("nvim-mybatis.config"):get().lsp then
				require("nvim-mybatis.lsp").attach(args.buf)
			end
		end,
	})
	-- refresh the mapper index entry of the saved file
	autocmd("BufWritePost", {
		pattern = "*.xml",
		group = group,
		callback = function(args)
			if utils.is_mybatis_file(args.buf) then
				require("nvim-mybatis.index").update_buffer(args.buf)
			end
		end,
	})
end

return M

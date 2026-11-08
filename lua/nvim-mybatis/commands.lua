--- @module 'nvim-mybatis.commands'
--- Public Neovim commands provided by nvim-mybatis.
---
--- * `:MybatisJump`: Navigate between a MyBatis mapper and its XML file.
--- * `:MybatisGenerateTag`: Generate a CRUD XML tag for the current mapper method.

local M = {}

local generator = require("nvim-mybatis.actions.generator")
local navigator = require("nvim-mybatis.navigator")

local function jump()
	local client = vim.lsp.get_clients({ bufnr = 0, name = "mybatis" })[1]
	if client then
		local params = vim.lsp.util.make_position_params(0, client.offset_encoding)
		client:request("textDocument/definition", params, function(err, result)
			if err then
				vim.lsp.buf.definition()
				return
			end
			local location = vim.islist(result) and result[1] or result
			if location then
				vim.lsp.util.show_document(location, client.offset_encoding, { reuse_win = true })
			else
				vim.lsp.buf.definition()
			end
		end)
		return
	end
	if not navigator.jump() then
		vim.lsp.buf.definition()
	end
end

local function generate_tag()
	if not generator.generate_tag_command() then
		vim.notify(
			"[MyBatis] Place the cursor on a mapper method to generate a tag",
			vim.log.levels.WARN
		)
	end
end

--- Register the public nvim-mybatis commands.
---
--- `:MybatisJump` navigates between a MyBatis mapper and its XML file.
--- `:MybatisGenerateTag` generates a CRUD XML tag for the current mapper
--- method.
function M.setup()
	vim.api.nvim_create_user_command("MybatisJump", jump, {
		desc = "Navigate between a MyBatis mapper and its XML file",
		force = true,
	})
	vim.api.nvim_create_user_command("MybatisGenerateTag", generate_tag, {
		desc = "Generate a MyBatis CRUD tag for the current mapper method",
		force = true,
	})
end

return M

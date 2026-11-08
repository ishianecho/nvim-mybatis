local config = require("nvim-mybatis.config")
local lsp = require("nvim-mybatis.lsp")
local helpers = require("spec.helpers")

local repo_root =
	vim.fs.dirname(vim.fs.dirname(vim.fs.dirname(debug.getinfo(1, "S").source:sub(2))))
local entry = repo_root .. "/server/dist/mybatis.mjs"

describe("lsp", function()
	it("attaches no client when the server dist is not built", function()
		if vim.fn.filereadable(entry) == 1 then
			return
		end
		config.setup({ lsp = true })
		helpers.cd_project()
		local bufnr = helpers.load_buf("project/src/main/resources/mapper/UserMapper.xml", "xml")

		assert.is_nil(lsp.attach(bufnr))
		assert.is_nil(vim.lsp.get_clients({ bufnr = bufnr })[1])

		config.setup()
		vim.cmd("%bdelete!")
		vim.cmd("cd -")
	end)
end)

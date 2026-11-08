--- Client for the built-in MyBatis language server (`server/dist/mybatis.mjs`).
--- @module 'nvim-mybatis.lsp'
local M = {}

local logger = require("nvim-mybatis.logger")

local warned = false

--- absolute path of the built server entry, `nil` when the dist is missing
--- @return string?
local function server_entry()
	local source = debug.getinfo(1, "S").source
	if not source or not source:find("^@") then
		return nil
	end
	local root = vim.fs.dirname(vim.fs.dirname(vim.fs.dirname(source:sub(2))))
	local entry = root .. "/server/dist/mybatis.mjs"
	if vim.fn.filereadable(entry) == 1 then
		return entry
	end
	if not warned then
		logger.warn("LSP server not built: run `cd server && pnpm install && pnpm build`")
		warned = true
	end
	return nil
end

--- start (or reuse) the MyBatis language server for `bufnr`
--- @param bufnr integer
--- @return integer? client_id
function M.attach(bufnr)
	local entry = server_entry()
	if not entry then
		return nil
	end
	local utils = require("nvim-mybatis.utils")
	local root_dir = utils.get_project_root()
	if not root_dir then
		return nil
	end
	local config = require("nvim-mybatis.config"):get()
	local client_id = vim.lsp.start({
		name = "mybatis",
		cmd = { "node", entry },
		root_dir = root_dir,
		filetypes = { "xml", "mybatis", "java" },
		init_options = {
			mapper_glob = config.mapper_glob,
			classpaths = config.classpaths,
		},
	}, {
		bufnr = bufnr,
		reuse_client = function(client, conf)
			return client.name == conf.name and client.config.root_dir == conf.root_dir
		end,
	})
	if client_id then
		if vim.bo[bufnr].filetype ~= "java" then
			vim.lsp.inlay_hint.enable(true, { bufnr = bufnr })
		end
		vim.keymap.set("n", "gd", "<Cmd>MybatisJump<CR>", {
			buffer = bufnr,
			desc = "Mybatis: jump between mapper XML and java",
		})
	end
	return client_id
end

return M

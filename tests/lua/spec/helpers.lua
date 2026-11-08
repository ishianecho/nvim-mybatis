--- Shared helpers for the nvim-mybatis test suite.
local M = {}

M.base_dir = vim.fn.fnamemodify(debug.getinfo(1, "S").source:sub(2), ":p:h")

--- @param relpath string path relative to tests/fixtures/
--- @return string
function M.fixture(relpath)
	return vim.fs.normalize(M.base_dir .. "/../../fixtures/" .. relpath)
end

--- load a fixture file into a buffer, make it the current buffer
--- @param relpath string path relative to tests/fixtures/
--- @param filetype string
--- @param lang? string treesitter language (defaults to `filetype`)
--- @return integer bufnr
function M.load_buf(relpath, filetype, lang)
	lang = lang or filetype
	local file = M.fixture(relpath)
	local bufnr = vim.fn.bufadd(file)
	vim.fn.bufload(bufnr)
	vim.bo[bufnr].filetype = filetype
	vim.api.nvim_set_current_buf(bufnr)
	vim.treesitter.start(bufnr, lang)
	vim.treesitter.get_parser(bufnr, lang):parse()
	return bufnr
end

--- place the cursor on the first occurrence of `needle` in the current buffer
--- @param needle string plain text to find
--- @param offset? integer 0-based column offset added to the match start
--- @return boolean found
function M.goto_mark(needle, offset)
	offset = offset or 0
	local lines = vim.api.nvim_buf_get_lines(0, 0, -1, false)
	for row, line in ipairs(lines) do
		local col = line:find(needle, 1, true)
		if col then
			vim.api.nvim_win_set_cursor(0, { row, col - 1 + offset })
			return true
		end
	end
	return false
end

--- change cwd to the fixture maven project (module root resolution scans cwd)
function M.cd_project()
	vim.cmd("cd " .. vim.fn.fnameescape(M.fixture("project")))
end

return M

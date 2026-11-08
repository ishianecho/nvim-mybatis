--- @module 'nvim-mybatis'
--- Configure nvim-mybatis and install its commands and integrations.

local M = {}

--- Configure nvim-mybatis.
--- @param config mybatis.NvimMybatisConfig?
function M.setup(config)
	require("nvim-mybatis.config").setup(config)
	require("nvim-mybatis.autocmd").setup()
	require("nvim-mybatis.commands").setup()
	require("nvim-mybatis.actions").setup()
end

return M

--- @module 'mybatis.config'
--- Configuration values and defaults for nvim-mybatis.

local M = {}

--- @type mybatis.NvimMybatisConfig
local DEFAULT_CONFIG = {
	classpaths = {
		"src/main",
	},
	debug = false,
	lsp = true,
	mapper_glob = "**/*[Mm]apper*",
	parser = "auto",
}

--- @type mybatis.NvimMybatisConfig
M.values = vim.deepcopy(DEFAULT_CONFIG)

--- @param config mybatis.NvimMybatisConfig?
function M.setup(config)
	local overrides = vim.deepcopy(config or {})
	local values = vim.tbl_deep_extend("force", vim.deepcopy(DEFAULT_CONFIG), overrides)
	for key in pairs(M.values) do
		M.values[key] = nil
	end
	for key, value in pairs(values) do
		M.values[key] = value
	end
	return M
end

--- @return mybatis.NvimMybatisConfig
function M.get()
	return M.values
end

return M

local M = {}

local generator = require("nvim-mybatis.actions.generator")

--- register `vim.lsp.commands` handlers for the server-issued commands
function M.setup()
	for cmd_name, handler in pairs(generator.SUPPORT_CMDS) do
		vim.lsp.commands[cmd_name] = function(command)
			handler(command.arguments[1])
		end
	end
end

return M

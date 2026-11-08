local config = require("nvim-mybatis.config")

describe("config", function()
	after_each(function()
		config.setup()
	end)

	it("applies overrides while retaining unrelated defaults", function()
		config.setup({
			debug = true,
			classpaths = { "custom/main" },
		})

		assert.is_true(config.get().debug)
		assert.same({ "custom/main" }, config.get().classpaths)
		assert.equals("auto", config.get().parser)
	end)

	it("resets overrides when setup is called again", function()
		config.setup({ debug = true })
		config.setup()

		assert.is_false(config.get().debug)
	end)

	it("defaults to exactly the supported options", function()
		assert.same({
			classpaths = { "src/main" },
			debug = false,
			lsp = true,
			mapper_glob = "**/*[Mm]apper*",
			parser = "auto",
		}, config.get())
	end)

	it("can disable the language server", function()
		config.setup({ lsp = false })

		assert.is_false(config.get().lsp)
	end)
end)

local helpers = require("spec.helpers")
local utils = require("nvim-mybatis.utils")

describe("utils", function()
	after_each(function()
		vim.cmd("%bdelete!")
	end)

	it("is_mybatis_file matches the mapper glob", function()
		local bufnr =
			helpers.load_buf("project/src/main/resources/mapper/UserMapper.xml", "xml", "mybatis")
		assert.is_true(utils.is_mybatis_file(bufnr))
	end)

	it("is_mybatis_file follows the configured mapper_glob", function()
		local config = require("nvim-mybatis.config")
		config.setup({ mapper_glob = "**/NoMatch*" })
		local bufnr =
			helpers.load_buf("project/src/main/resources/mapper/UserMapper.xml", "xml", "mybatis")
		assert.is_false(utils.is_mybatis_file(bufnr))
		config.setup()
		assert.is_true(utils.is_mybatis_file(bufnr))
	end)

	it("get_module_root finds the fixture maven root", function()
		helpers.cd_project()
		assert.equals(helpers.fixture("project"), vim.fs.normalize(utils.get_module_root()))
		vim.cmd("cd -")
	end)

	it("find_java_file resolves a class on the java classpath", function()
		helpers.cd_project()
		local file = utils.find_java_file("com.example.entity.User")
		assert.is_not_nil(file)
		assert.truthy(vim.fs.normalize(file):find("entity/User%.java$"))
		assert.is_nil(utils.find_java_file("com.example.NoSuch"))
		vim.cmd("cd -")
	end)

	it("load_java_buffer loads the class source into a buffer", function()
		helpers.cd_project()
		local bufnr = utils.load_java_buffer("com.example.entity.User")
		assert.is_not_nil(bufnr)
		assert.truthy(vim.api.nvim_buf_get_name(bufnr):find("User%.java$"))
		vim.cmd("cd -")
	end)

	it("resolve_class resolves unique simple names and passes dotted names through", function()
		helpers.cd_project()
		assert.equals("com.example.entity.Profile", utils.resolve_class("Profile"))
		assert.is_nil(utils.resolve_class("User"))
		assert.equals("com.example.entity.User", utils.resolve_class("com.example.entity.User"))
		assert.is_nil(utils.resolve_class("NoSuchClass"))
		vim.cmd("cd -")
	end)

	it("scan_java_classes lists fully-qualified class names", function()
		local classes = utils.scan_java_classes(helpers.fixture("project/src/main/java"), "")
		table.sort(classes)
		assert.same({
			"com.example.entity.Profile",
			"com.example.entity.User",
			"com.example.legacy.User",
			"com.example.mapper.UserMapper",
		}, classes)
	end)

	it("scan_java_classes excludes target and build directories", function()
		local classes = utils.scan_java_classes(
			vim.fs.normalize((debug.getinfo(1, "S").source:sub(2):gsub("/[^/]+$", "")))
				.. "/excluded",
			""
		)
		assert.same({}, classes)
	end)
end)

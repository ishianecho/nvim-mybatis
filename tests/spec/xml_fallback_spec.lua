local helpers = require("spec.helpers")
local config = require("nvim-mybatis.config")
local parser = require("nvim-mybatis.parser")
local query = require("nvim-mybatis.treesitter.query")
local extract = require("nvim-mybatis.treesitter.extract")
local index = require("nvim-mybatis.index")

local XML = "project/src/main/resources/mapper/UserMapper.xml"

describe("xml fallback", function()
	before_each(function()
		config.setup({ parser = "xml" })
		helpers.cd_project()
		index.reset()
	end)

	after_each(function()
		config.setup({})
		vim.cmd("%bdelete!")
		vim.cmd("cd -")
	end)

	it("resolves the configured grammar", function()
		assert.equals("xml", parser.lang())
	end)

	it("resolves the mybatis grammar on auto when installed", function()
		config.setup({})
		assert.equals(vim.treesitter.language.add("mybatis") and "mybatis" or "xml", parser.lang())
	end)

	it("finds the namespace and crud ids through queries", function()
		local bufnr = helpers.load_buf(XML, "xml", "xml")
		local found = false
		local ns = query.namespace("com.example.mapper.UserMapper")
		local parsed = query.parse(ns)
		for _ in query.iter_query(bufnr, ns.lang, parsed) do
			found = true
			break
		end
		assert.truthy(found)

		found = false
		local crud = query.crud_id("selectUser")
		parsed = query.parse(crud)
		for _ in query.iter_query(bufnr, crud.lang, parsed) do
			found = true
			break
		end
		assert.truthy(found)
	end)

	it("extracts crud ids and namespaces from the xml tree", function()
		local bufnr = helpers.load_buf(XML, "xml", "xml")
		assert.truthy(helpers.goto_mark('id="selectUser"'))
		local node = vim.treesitter.get_node({ bufnr = bufnr, lang = "xml" })
		assert.equals("selectUser", extract.crud_id(node, bufnr))
		assert.equals("com.example.mapper.UserMapper", extract.belong_namespace(node, bufnr))
	end)

	it("indexes namespaces and sql fragments from disk", function()
		local path = index.file_for_namespace("com.example.mapper.UserMapper")
		assert.is_not_nil(path)
		local target = index.sql_fragment("baseColumns", path)
		assert.is_not_nil(target)
		assert.equals("baseColumns", target.id)
	end)
end)

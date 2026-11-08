local helpers = require("spec.helpers")
local extract = require("nvim-mybatis.treesitter.extract")
local ts = vim.treesitter

local XML = "project/src/main/resources/mapper/UserMapper.xml"
local JAVA = "project/src/main/java/com/example/mapper/UserMapper.java"

local function node(bufnr, lang)
	return ts.get_node({ bufnr = bufnr, lang = lang })
end

describe("treesitter.extract", function()
	after_each(function()
		vim.cmd("%bdelete!")
	end)

	it("classname extracts the value of a type attribute", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.truthy(helpers.goto_mark('namespace="com.example.mapper.UserMapper"'))
		assert.equals(
			"com.example.mapper.UserMapper",
			extract.classname(node(bufnr, "mybatis"), bufnr)
		)
	end)

	it("classname extracts resultType", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.truthy(helpers.goto_mark('resultType="com.example.entity.User"'))
		assert.equals("com.example.entity.User", extract.classname(node(bufnr, "mybatis"), bufnr))
	end)

	it("crud_id extracts the id of a crud tag", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.truthy(helpers.goto_mark('id="selectUser"'))
		assert.equals("selectUser", extract.crud_id(node(bufnr, "mybatis"), bufnr))
	end)

	it("crud_id returns nil for non-crud tags", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.truthy(helpers.goto_mark('id="userMap"'))
		assert.is_nil(extract.crud_id(node(bufnr, "mybatis"), bufnr))
	end)

	it("belong_namespace finds the enclosing mapper namespace", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.truthy(helpers.goto_mark('id="deleteUser"'))
		assert.equals(
			"com.example.mapper.UserMapper",
			extract.belong_namespace(node(bufnr, "mybatis"), bufnr)
		)
	end)

	it("refid extracts the refid of an include tag", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.truthy(helpers.goto_mark('refid="baseColumns"'))
		assert.equals("baseColumns", extract.refid(node(bufnr, "mybatis"), bufnr))
	end)

	it("property resolves the resultMap type for a property attribute", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.truthy(helpers.goto_mark('property="username"'))
		local type_value, property_value = extract.property(node(bufnr, "mybatis"), bufnr)
		assert.equals("com.example.entity.User", type_value)
		assert.equals("username", property_value)
	end)

	it("interface_method extracts interface and method from java", function()
		local bufnr = helpers.load_buf(JAVA, "java")
		assert.truthy(helpers.goto_mark("User selectUser(Long id)"))
		local interface, method = extract.interface_method(node(bufnr), bufnr)
		assert.equals("UserMapper", interface)
		assert.equals("selectUser", method)
	end)

	it("resultType unwraps List generic return types", function()
		local bufnr = helpers.load_buf(JAVA, "java")
		assert.truthy(helpers.goto_mark("List<User> findUsersByUsername"))
		assert.equals("User", extract.resultType(node(bufnr), bufnr))
	end)
end)

local helpers = require("spec.helpers")
local query = require("nvim-mybatis.treesitter.query")
local scan = require("nvim-mybatis.treesitter.scan")

local XML = "project/src/main/resources/mapper/UserMapper.xml"
local MAPPER_JAVA = "project/src/main/java/com/example/mapper/UserMapper.java"
local USER_JAVA = "project/src/main/java/com/example/entity/User.java"

--- count captures of a query against a buffer
--- @param bufnr integer
--- @param qry mybatis.treesitter.Query
--- @return integer
local function count_matches(bufnr, qry)
	local n = 0
	for _ in query.iter_query(bufnr, qry.lang, query.parse(qry)) do
		n = n + 1
	end
	return n
end

describe("treesitter.query", function()
	after_each(function()
		vim.cmd("%bdelete!")
	end)

	it("finds the mapper namespace declaration", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.is_true(count_matches(bufnr, query.namespace("com.example.mapper.UserMapper")) >= 1)
		assert.equals(0, count_matches(bufnr, query.namespace("com.unknown.NoSuchMapper")))
	end)

	it("finds sql fragment ids", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.is_true(count_matches(bufnr, query.sqlid("baseColumns")) >= 1)
		assert.equals(0, count_matches(bufnr, query.sqlid("noSuchFragment")))
	end)

	it("finds crud id attributes", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.is_true(count_matches(bufnr, query.crud_id("selectUser")) >= 1)
		assert.equals(0, count_matches(bufnr, query.crud_id("noSuchMethod")))
	end)

	it("finds the mapper end tag", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.is_true(count_matches(bufnr, query.mapper_etag()) >= 1)
	end)

	it("finds all sql ids in the buffer", function()
		local bufnr = helpers.load_buf(XML, "xml", "mybatis")
		assert.is_true(count_matches(bufnr, query.sqlids()) >= 1)
	end)

	it("finds java interfaces and packages", function()
		local bufnr = helpers.load_buf(MAPPER_JAVA, "java")
		assert.is_true(count_matches(bufnr, query.interface()) >= 1)
		assert.is_true(count_matches(bufnr, query.package()) >= 1)
	end)

	it("finds a specific method declaration", function()
		local bufnr = helpers.load_buf(MAPPER_JAVA, "java")
		assert.is_true(count_matches(bufnr, query.method("selectUser")) >= 1)
		assert.equals(0, count_matches(bufnr, query.method("noSuchMethod")))
	end)

	it("finds a specific field declaration", function()
		local bufnr = helpers.load_buf(USER_JAVA, "java")
		assert.is_true(count_matches(bufnr, query.field("username")) >= 1)
		assert.equals(0, count_matches(bufnr, query.field("noSuchField")))
	end)

	it("finds all methods and fields", function()
		local bufnr = helpers.load_buf(MAPPER_JAVA, "java")
		assert.is_true(count_matches(bufnr, query.methods()) >= 5)
		local user_bufnr = helpers.load_buf(USER_JAVA, "java")
		assert.is_true(count_matches(user_bufnr, query.fields()) >= 3)
	end)
end)

describe("treesitter.scan", function()
	after_each(function()
		vim.cmd("%bdelete!")
	end)

	it("scans the package declaration", function()
		local bufnr = helpers.load_buf(MAPPER_JAVA, "java")
		assert.equals("com.example.mapper", scan.package(bufnr))
	end)

	it("scans all interface method names", function()
		local bufnr = helpers.load_buf(MAPPER_JAVA, "java")
		local names = scan.methods(bufnr)
		assert.equals(6, #names)
		assert.equals("selectUser", names[1])
		assert.equals("countByUsername", names[6])
	end)

	it("scans all entity field names", function()
		local bufnr = helpers.load_buf(USER_JAVA, "java")
		local names = scan.fields(bufnr)
		assert.equals(4, #names)
		assert.equals("id", names[1])
		assert.equals("email", names[3])
		assert.equals("profile", names[4])
	end)
end)

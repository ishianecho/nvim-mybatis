--- `query` defines some commonly used queries
local M = {}

local ts = vim.treesitter
local parser = require("nvim-mybatis.parser")
local constants = require("nvim-mybatis.constants")

--- @return mybatis.treesitter.Query query
function M.package()
	return {
		lang = "java",
		query = [[
			(package_declaration
				(scoped_identifier) @pkg)
		]],
	}
end

--- @return mybatis.treesitter.Query query
function M.interface()
	return {
		lang = "java",
		query = [[
			(interface_declaration name: (identifier) @name)
			(class_declaration name: (identifier) @name)
		]],
	}
end

function M.field(field)
	return {
		lang = "java",
		query = string.format(
			[[
				(field_declaration
				  declarator: (variable_declarator
					name: (identifier) @field_name
					(#eq? @field_name "%s")))
			]],
			field
		),
	}
end

--- @return mybatis.treesitter.Query
function M.methods()
	return {
		lang = "java",
		query = [[
			(method_declaration name: (identifier) @method_name)
		]],
	}
end

--- field declarations with their declared types
--- @return mybatis.treesitter.Query
function M.field_types()
	return {
		lang = "java",
		query = [[
			(field_declaration
			  type: (_) @field_type
			  declarator: (variable_declarator
			    name: (identifier) @field_name))
		]],
	}
end

--- @return mybatis.treesitter.Query
function M.fields()
	return {
		lang = "java",
		query = [[
			(field_declaration
			  declarator: (variable_declarator
			    name: (identifier) @field_name))
		]],
	}
end

--- @param method string
--- @return mybatis.treesitter.Query query
function M.method(method)
	return {
		lang = "java",
		query = string.format(
			[[
            (method_declaration
                name: (identifier) @method_name
                (#eq? @method_name "%s")
            )
				]],
			method
		),
	}
end

--- @param method string
--- @return mybatis.treesitter.Query query
function M.method_declaration(method)
	return {
		lang = "java",
		query = string.format(
			[[
            (method_declaration
                name: (identifier) @method_name
                (#eq? @method_name "%s")
            ) @method
            ]],
			method
		),
	}
end

--- build a query that matches an attribute on an element by tag name
--- @param tags string[]
--- @param attr string attr name
--- @param value string? attr value without quotes
--- @return mybatis.treesitter.Query
local function element_attr_query(tags, attr, value)
	local lang = parser.lang()
	local value_pred = value and string.format('\n\t(#eq? @attr_value "\\"%s\\"")', value) or ""
	local clauses = {}
	for _, tag in ipairs(tags) do
		if lang == "mybatis" and vim.tbl_contains(constants.ROOT_TAGS, tag) then
			local stag = tag:gsub("^%l", string.upper) .. "STag"
			table.insert(
				clauses,
				string.format(
					[[(%s
					  (Name) @anchor
					  (Attribute
					    (Name) @attr_name
					    (AttValue) @attr_value
					    (#eq? @attr_name "%s")%s))]],
					stag,
					attr,
					value_pred
				)
			)
		else
			table.insert(
				clauses,
				string.format(
					[[(element
					  (STag
					    (Name) @anchor
					    (#eq? @anchor "%s")
					    (Attribute
					      (Name) @attr_name
					      (AttValue) @attr_value)
					    (#eq? @attr_name "%s")%s))]],
					tag,
					attr,
					value_pred
				)
			)
		end
	end
	return {
		lang = lang,
		query = table.concat(clauses, "\n"),
	}
end

--- @param sqlid string value without quotes
--- @return mybatis.treesitter.Query
function M.sqlid(sqlid)
	local lang = parser.lang()
	if lang == "mybatis" then
		return {
			lang = lang,
			query = string.format(
				[[
				(SqlElem
				  (Name) @anchor
				  (Attribute
				    (Name) @attr_name
				    (AttValue) @attr_value
				    (#eq? @attr_name "id")
				    (#eq? @attr_value "\"%s\"")))
				]],
				sqlid
			),
		}
	end
	return element_attr_query({ "sql" }, "id", sqlid)
end

--- @param namespace string
--- @return mybatis.treesitter.Query
function M.namespace(namespace)
	return element_attr_query(constants.ROOT_TAGS, "namespace", namespace)
end

--- @param method string
--- @return mybatis.treesitter.Query
function M.crud_id(method)
	local lang = parser.lang()
	local tags = lang == "mybatis" and constants.STATEMENT_ELEMENTS or constants.STATEMENT_TAGS
	if lang == "mybatis" then
		local clauses = {}
		for _, elem in ipairs(tags) do
			table.insert(
				clauses,
				string.format(
					[[(%s
					  (Name) @anchor
					  (Attribute
					    (Name) @attr_name
					    (AttValue) @attr_value
					    (#eq? @attr_name "id")
					    (#eq? @attr_value "\"%s\"")))]],
					elem,
					method
				)
			)
		end
		return {
			lang = lang,
			query = table.concat(clauses, "\n"),
		}
	end
	return element_attr_query(constants.STATEMENT_TAGS, "id", method)
end

--- @param resultMap string value without quotes
--- @return mybatis.treesitter.Query
function M.resultMap(resultMap)
	return element_attr_query({ "resultMap" }, "id", resultMap)
end

--- @return mybatis.treesitter.Query all `<sql id="...">` fragment ids in a buffer
function M.sqlids()
	local lang = parser.lang()
	if lang == "mybatis" then
		return {
			lang = lang,
			query = [[
				(SqlElem
				  (Attribute
				    (Name) @attr_name
				    (AttValue) @attr_value)
				  (#eq? @attr_name "id"))
			]],
		}
	end
	return {
		lang = lang,
		query = [[
			(element
			  (STag
			    (Name) @anchor
			    (#eq? @anchor "sql")
			    (Attribute
			      (Name) @attr_name
			      (AttValue) @attr_value)
			    (#eq? @attr_name "id")))
		]],
	}
end

--- @return mybatis.treesitter.Query all `<resultMap id="...">` definitions in a buffer
function M.result_maps()
	return {
		lang = parser.lang(),
		query = [[
			(element
			  (STag
			    (Name) @tag_name
			    (#eq? @tag_name "resultMap")
			    (Attribute
			      (Name) @attr_name
			      (AttValue) @attr_value)
			    (#eq? @attr_name "id")))
		]],
	}
end

--- @return mybatis.treesitter.Query
function M.mapper_etag()
	local lang = parser.lang()
	if lang == "mybatis" then
		return {
			lang = lang,
			query = [[
	            (MapperETag) @etag
	        ]],
		}
	end
	return {
		lang = lang,
		query = [[
			(ETag
			  (Name) @name
			  (#eq? @name "mapper"))
		]],
	}
end

--- @param query mybatis.treesitter.Query
--- @return vim.treesitter.Query
function M.parse(query)
	return vim.treesitter.query.parse(query.lang, query.query)
end

--- @param bufnr integer
--- @param lang string
--- @param query vim.treesitter.Query
--- @return (fun(end_line: integer|nil, end_col: integer|nil):integer, TSNode, vim.treesitter.query.TSMetadata, TSQueryMatch, TSTree)|nil iter
function M.iter_query(bufnr, lang, query)
	local parser = ts.get_parser(bufnr, lang)
	if not parser then
		return nil
	end
	return query:iter_captures(parser:parse()[1]:root(), bufnr, 0, -1)
end

return M

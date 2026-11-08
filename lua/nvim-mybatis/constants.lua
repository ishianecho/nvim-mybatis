--- @module 'mybatis.constants'

--- XML attributes whose values can refer to Java types.
--- @type string[]
local TYPE_ATTRIBUTES = {
	"namespace",
	"resultType",
	"parameterType",
	"type",
	"javaType",
	"ofType",
	"typeHandler",
}

--- Element node types whose `id` attribute refers to a mapper method.
--- @type string[]
local STATEMENT_ELEMENTS = {
	"SelElem",
	"InsElem",
	"UpdElem",
	"DelElem",
	"ProcElem",
	"SelKeyElem",
}

--- Tag names whose `id` attribute refers to a mapper method.
--- @type string[]
local STATEMENT_TAGS = {
	"select",
	"insert",
	"update",
	"delete",
	"procedure",
	"selectKey",
}

--- Root tag names that carry the mapper `namespace`.
--- @type string[]
local ROOT_TAGS = {
	"mapper",
	"sqlMap",
}

--- tree-sitter-mybatis element node types mapped to their tag names.
--- @type table<string, string>
local NAMED_ELEMENT_TYPES = {
	Mapper = "mapper",
	MapperSTag = "mapper",
	MapperETag = "mapper",
	SqlMap = "sqlMap",
	SqlMapSTag = "sqlMap",
	SqlMapETag = "sqlMap",
}

return {
	TYPE_ATTRIBUTES = TYPE_ATTRIBUTES,
	STATEMENT_ELEMENTS = STATEMENT_ELEMENTS,
	STATEMENT_TAGS = STATEMENT_TAGS,
	ROOT_TAGS = ROOT_TAGS,
	NAMED_ELEMENT_TYPES = NAMED_ELEMENT_TYPES,
}

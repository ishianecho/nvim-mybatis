--- @module 'nvim-mybatis.treesitter.element'
--- Grammar-agnostic element helpers, keyed by tag name.
local M = {}

local ts = vim.treesitter
local constants = require("nvim-mybatis.constants")

local TAG_TYPES = {
	STag = true,
	ETag = true,
	EmptyElemTag = true,
	MapperSTag = true,
	MapperETag = true,
	SqlMapSTag = true,
	SqlMapETag = true,
}

--- can `node` carry a tag name
--- @param node TSNode
--- @return boolean
local function is_tag_node(node)
	local t = node:type()
	return TAG_TYPES[t] or M.is_element_node(node)
end

--- is `node` a whole element
--- @param node TSNode
--- @return boolean
function M.is_element_node(node)
	local t = node:type()
	return t == "element" or t == "Mapper" or t == "SqlMap" or vim.endswith(t, "Elem")
end

--- the tag name of an element or tag node
--- @param node TSNode
--- @param source integer|string buffer or document text
--- @return string?
function M.element_name(node, source)
	local t = node:type()
	local mapped = constants.NAMED_ELEMENT_TYPES[t]
	if mapped then
		return mapped
	end
	if t == "element" then
		local child = node:named_child(0)
		local name = child and child:named_child(0)
		return name and ts.get_node_text(name, source) or nil
	end
	if not is_tag_node(node) then
		return nil
	end
	local child = node:named_child(0)
	if child and child:type() == "Name" then
		return ts.get_node_text(child, source)
	end
	return nil
end

--- nodes whose direct children may include `Attribute` nodes
--- @param node TSNode
--- @return TSNode[] holders
local function attribute_holders(node)
	local holders = { node }
	for i = 0, node:named_child_count() - 1 do
		local child = node:named_child(i)
		if TAG_TYPES[child:type()] then
			table.insert(holders, child)
		end
	end
	return holders
end

--- read an attribute of the nearest enclosing element or tag node
--- @param node TSNode
--- @param source integer|string buffer or document text
--- @param name string
--- @return string? value unquoted
--- @return TSNode? value_node
function M.attribute_of(node, source, name)
	local target = node
	while target and not is_tag_node(target) do
		target = target:parent()
	end
	if not target then
		return nil, nil
	end
	for _, holder in ipairs(attribute_holders(target)) do
		for i = 0, holder:named_child_count() - 1 do
			local child = holder:named_child(i)
			if child:type() == "Attribute" then
				local name_node = child:named_child(0)
				if name_node and ts.get_node_text(name_node, source) == name then
					local value_node = child:named_child(1)
					if value_node then
						return ts.get_node_text(value_node, source):gsub("['\"]", ""), value_node
					end
					return nil, nil
				end
			end
		end
	end
	return nil, nil
end

--- the nearest enclosing element or tag node of `node`
--- @param node TSNode
--- @return TSNode?
function M.enclosing_tag(node)
	local current = node
	while current do
		if is_tag_node(current) then
			return current
		end
		current = current:parent()
	end
	return nil
end

return M

local M = {}

local uv = vim.uv or vim.loop
local config = require("nvim-mybatis.config"):get()
local logger = require("nvim-mybatis.logger")

local ROOT_FILES = { "pom.xml", "build.gradle", "build.gradle.kts" }

local compiled_glob = nil
local compiled = nil

--- match a filename against the configured `mapper_glob`
--- @param filename string
--- @return boolean
function M.matches_mapper_glob(filename)
	if compiled_glob ~= config.mapper_glob then
		compiled = vim.glob.to_lpeg(config.mapper_glob)
		compiled_glob = config.mapper_glob
	end
	return compiled:match(filename) ~= nil
end

--- check if the filename matches the mapper glob
--- @param bufnr? integer
--- @return boolean
function M.is_mybatis_file(bufnr)
	bufnr = bufnr or vim.api.nvim_get_current_buf()
	local filename = vim.fn.fnamemodify(vim.api.nvim_buf_get_name(bufnr), ":t")
	return M.matches_mapper_glob(filename)
end

--- check if the file is xml and mybatis file
--- @param bufnr? integer
--- @return boolean
function M.is_mybatis_xml(bufnr)
	bufnr = bufnr or vim.api.nvim_get_current_buf()
	return vim.tbl_contains({ "xml", "mybatis" }, vim.bo[bufnr].filetype)
		and M.is_mybatis_file(bufnr)
end

local function parent_dir(dir)
	local parent = vim.fn.fnamemodify(dir, ":h")
	if parent == "" or parent == dir then
		return nil
	end
	return parent
end

local function has_root_file(dir)
	for _, filename in ipairs(ROOT_FILES) do
		if vim.fn.filereadable(dir .. "/" .. filename) == 1 then
			return true
		end
	end
	return false
end

--- get project / module root dir
--- @return string?
function M.get_module_root()
	for _, filename in ipairs(ROOT_FILES) do
		local found_file = vim.fn.findfile(filename, ".;")
		if found_file ~= "" then
			return vim.fn.fnamemodify(found_file, ":p:h")
		end
	end
	return nil
end

--- get the outermost project root containing the current module
--- @return string?
function M.get_project_root()
	local module_root = M.get_module_root()
	if not module_root then
		return nil
	end
	local project_root = module_root
	local dir = parent_dir(module_root)
	while dir do
		if has_root_file(dir) then
			project_root = dir
		end
		dir = parent_dir(dir)
	end
	return project_root
end

--- default directory name patterns excluded when scanning java sources
M.EXCLUDED_DIRS = { "^%.", "target", "build" }

--- scan dir_path recursively
--- @param dir_path string
--- @param current_pkg string
--- @param exclude_dirs? string[]
--- @return string[] classes All fully qualified class name in `dir_path`
function M.scan_java_classes(dir_path, current_pkg, exclude_dirs)
	local classes = {}
	exclude_dirs = exclude_dirs or M.EXCLUDED_DIRS

	local function should_exclude(dir_name)
		for _, pattern in ipairs(exclude_dirs) do
			if dir_name:match(pattern) then
				return true
			end
		end
		return false
	end

	local handle = uv.fs_scandir(dir_path)
	if not handle then
		return classes
	end

	while true do
		local name, type = uv.fs_scandir_next(handle)
		if not name then
			break
		end

		if type == "file" and name:match("%.java$") then
			local class_name = name:gsub("%.java$", "")
			local full_class = current_pkg == "" and class_name or current_pkg .. "." .. class_name
			table.insert(classes, full_class)
		elseif type == "directory" and not should_exclude(name) then
			local new_pkg = current_pkg == "" and name or current_pkg .. "." .. name
			local sub_classes = M.scan_java_classes(dir_path .. "/" .. name, new_pkg, exclude_dirs)
			for _, class in ipairs(sub_classes) do
				table.insert(classes, class)
			end
		end
	end

	return classes
end

--- @param func fun(classpath: string): boolean?
--- @param suffix string "java" or "resources"
--- @return boolean
function M.foreach_classpath(func, suffix)
	local project_root = M.get_project_root()
	if not project_root then
		logger.warn(
			"Module root not found (missing root file: " .. table.concat(ROOT_FILES, ", ") .. ")"
		)
		return false
	end
	for _, root in ipairs(config.classpaths) do
		local relative_classpath = root:gsub("/$", "") .. "/" .. suffix
		local paths = vim.fn.glob(project_root .. "/**/" .. relative_classpath, false, true)
		local direct_path = project_root .. "/" .. relative_classpath
		if #paths == 0 then
			paths = { direct_path }
		end
		for _, path in ipairs(paths) do
			if func(path .. "/") then
				return true
			end
		end
	end
	return false
end

local class_map = nil
local class_map_root = nil

--- resolve a class name to its fully-qualified form (unique simple names only)
--- @param classname string
--- @return string? fqn
function M.resolve_class(classname)
	if classname:find(".", 1, true) then
		return classname
	end
	local project_root = M.get_project_root()
	if not project_root then
		return nil
	end
	if class_map == nil or class_map_root ~= project_root then
		class_map = {}
		local ambiguous = {}
		M.foreach_classpath(function(classpath)
			for _, fqn in ipairs(M.scan_java_classes(classpath, "")) do
				local simple = fqn:match("[^.]+$")
				if simple and not ambiguous[simple] then
					if class_map[simple] then
						if class_map[simple] ~= fqn then
							ambiguous[simple] = true
							class_map[simple] = nil
						end
					else
						class_map[simple] = fqn
					end
				end
			end
			return false
		end, "java")
		class_map_root = project_root
	end
	return class_map[classname]
end

--- search mappers.xml by namespace through the mapper index
--- @param namespace string
--- @return string? file
function M.search_mapper(namespace)
	local index = require("nvim-mybatis.index")
	local result = index.file_for_namespace(namespace)
	if result == nil then
		logger.warn("No XML file found for mapper: " .. namespace)
		return nil
	end
	return result
end

--- find the java source file of a fully-qualified class name on the classpaths
--- @param classname string
--- @return string? file
function M.find_java_file(classname)
	local filepath = classname:gsub("%.", "/") .. ".java"
	local result
	M.foreach_classpath(function(classpath)
		local full = classpath .. filepath
		if vim.fn.filereadable(full) == 1 then
			result = full
			return true
		end
		return false
	end, "java")
	return result
end

--- load a java class source into a hidden buffer for treesitter parsing
--- @param classname string
--- @return integer? bufnr
function M.load_java_buffer(classname)
	local file = M.find_java_file(classname)
	if not file then
		return nil
	end
	local bufnr = vim.fn.bufadd(file)
	vim.fn.bufload(bufnr)
	return bufnr
end

return M

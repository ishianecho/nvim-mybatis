--- @module 'mybatis.types'
--- Public EmmyLua types used by nvim-mybatis.

--- @class mybatis.treesitter.Query
--- @field lang string
--- @field query string

--- @alias mybatis.parser.Option
--- | "auto" use tree-sitter-mybatis when installed, otherwise the built-in xml grammar
--- | "mybatis" require tree-sitter-mybatis, fall back to xml with a warning
--- | "xml" always use the built-in xml grammar

--- @class mybatis.NvimMybatisConfig
--- @field classpaths? string[] Source roots; `java` and `resources` subdirectories are appended per scan kind
--- @field debug? boolean Enable debug mode
--- @field lsp? boolean attach the built-in MyBatis language server (completion, inlay hints, code actions, definition); `false` keeps only treesitter-based jump
--- @field mapper_glob? string Glob pattern identifying mapper files by name
--- @field parser? mybatis.parser.Option Tree-sitter grammar for mapper XML

--- @class mybatis.action.CrudTagArgs
--- @field interface string interface name
--- @field method string method name
--- @field resultType? string `resultType` attribute (defaults to `"resultType"`)
--- @field bufnr? integer Java source file buffer number (defaults to the current buffer)

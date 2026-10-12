*nvim-mybatis-README.txt*     For NVIM v0.8.0     Last change: 2026 October 12

==============================================================================
Table of Contents                      *nvim-mybatis-README-table-of-contents*

1. nvim-mybatis                             |nvim-mybatis-README-nvim-mybatis|
  - ✨ Features               |nvim-mybatis-README-nvim-mybatis-✨-features|
  - 📦 Installation     |nvim-mybatis-README-nvim-mybatis-📦-installation|
  - ⚙️ Configuration|nvim-mybatis-README-nvim-mybatis-⚙️-configuration|
  - ⌨️ Commands         |nvim-mybatis-README-nvim-mybatis-⌨️-commands|
  - 📝 Notes                   |nvim-mybatis-README-nvim-mybatis-📝-notes|
  - 🤝 Contributing     |nvim-mybatis-README-nvim-mybatis-🤝-contributing|
  - 📄 License               |nvim-mybatis-README-nvim-mybatis-📄-license|

==============================================================================
1. nvim-mybatis                             *nvim-mybatis-README-nvim-mybatis*

简体中文
<https://github.com/ishianecho/nvim-mybatis/blob/main/docs/README_zh_CN.md> |
English

A lightweight Neovim plugin powered by Tree-sitter for enhanced navigation
between Java MyBatis Mapper interfaces and their corresponding XML files.


✨ FEATURES                   *nvim-mybatis-README-nvim-mybatis-✨-features*


🔄 NAVIGATION ~


XML MAPPING FILE → JAVA CODE

- Navigate from MyBatis XML type attributes to their corresponding Java types, supporting attributes: `namespace`, `resultType`, `parameterType`, `type`, `javaType`, `ofType`, `typeHandler`.
- Navigate from the `id` attribute of SQL statement tags to the corresponding method in the Mapper interface.
- Navigate from a `<result property="...">` tag to the corresponding field in its Java entity class.


JAVA CODE → XML MAPPING FILE

- Navigate from a Mapper interface to the `<mapper namespace="...">` declaration in its XML file.
- Navigate from a Mapper interface method to its corresponding SQL statement tag in the XML file.


XML → XML NAVIGATION

- Navigate from an `<include refid="...">` tag to its target `<sql id="...">` definition, supporting both simple and fully-qualified references.
- Navigate from a `<resultMap extends="...">` or `<select resultMap="...">` tag to its target `<resultMap>` definition.


🎯 INTELLIGENT CODE COMPLETION ~

- **blink.cmp Integration**: Auto-completion for `namespace`, `resultType`, `parameterType`, `type`, `javaType`, or `ofType` attributes with package/class suggestions


CODE ACTION ~

- `nvim-mybatis` injects `Code Action` into the language server named `jdtls`. Qualified entries will be provided when `vim.lsp.buf.code_action` is invoked, which requires a connected `jdtls` server.
- `Generate MyBatis Tag`: When the cursor points to a method in a Mapper interface, this action intelligently determines the `CRUD` type and generates the corresponding `XML tag` snippet in the associated `XML` file.
- The same action is available as the `:MybatisGenerateTag` command.


📦 INSTALLATION         *nvim-mybatis-README-nvim-mybatis-📦-installation*

Lazy.nvim ~

>lua
    {
      "ishi-o/nvim-mybatis",
      opts = {},
    }
<

blink.cmp Integration ~

For auto-completion support, configure blink.cmp as follows:

>lua
    require("blink.cmp").setup({
        sources = {
            default = {
                "lsp",
                "path",
                "snippets",
                "buffer",
                "mybatis", -- Add this source
            },
            providers = {
                mybatis = {
                    name = "Mybatis",
                    module = "nvim-mybatis.completion.blink",
                },
            },
        },
    })
<


⚙️ CONFIGURATION   *nvim-mybatis-README-nvim-mybatis-⚙️-configuration*

Pass configuration through the plugin’s `opts` table. See `:help
nvim-mybatis-api` for the available options and defaults.


DEFAULT CONFIGURATION ~

>lua
    {
        autocmd = true,
        xml_search_pattern = { "**/*Mapper*.xml" },
        xml_search_tool = "default",
        completion_provider = "default",
        mapper_name_pattern = { "[Mm]apper" },
        classpaths = {
            java = { "src/main/java" },
            xml = { "src/main/resources" },
        },
        root_file = { "pom.xml", "build.gradle", "build.gradle.kts" },
        debug = false,
    }
<


⌨️ COMMANDS             *nvim-mybatis-README-nvim-mybatis-⌨️-commands*

After calling `require("nvim-mybatis").setup()`, the following commands are
available:

- `:MybatisJump`: Navigate from the current Java mapper or XML mapping file. If nvim-mybatis cannot find a target, it falls back to `vim.lsp.buf.definition()`.
- `:MybatisGenerateTag`: Generate the CRUD XML tag for the mapper method under the cursor.

The optional `autocmd = true` setting keeps the existing filetype autocmds and
buffer-local `gd` mappings. Set it to `false` to use the commands without
installing those autocmds.


📝 NOTES                       *nvim-mybatis-README-nvim-mybatis-📝-notes*

- **nvim-treesitter**: Required for the Java and XML parsers.
- The public configuration, Lua API, and type reference is available in the generated `:help nvim-mybatis-api` documentation.


🤝 CONTRIBUTING         *nvim-mybatis-README-nvim-mybatis-🤝-contributing*

Issues and feature requests are welcome on the GitHub Issues page
<https://github.com/ishi-o/nvim-mybatis/issues>.


📄 LICENSE                   *nvim-mybatis-README-nvim-mybatis-📄-license*

MIT License - see LICENSE <LICENSE> file for details.

Generated by panvimdoc <https://github.com/kdheepak/panvimdoc>

vim:tw=78:ts=8:noet:ft=help:norl:

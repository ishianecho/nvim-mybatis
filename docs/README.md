# nvim-mybatis

[简体中文](https://github.com/ishianecho/nvim-mybatis/blob/main/docs/README_zh_CN.md) | English

A Neovim plugin for MyBatis: jump between Java mapper interfaces and XML files, with a built-in language server providing completion, inlay hints, and code actions.

## Features

- Navigation (`gd`)
  - XML → Java: type attributes (`namespace`, `resultType`, `parameterType`, `type`, `javaType`, `ofType`, `typeHandler`) → class; statement `id` → mapper method; `<result property>` → entity field; `#{param.path}` → parameter or entity field
  - Java → XML: mapper method → statement tag; entity field → `<result property>`; interface → `<mapper>` root
  - XML → XML: `<include refid>` → `<sql>`; `resultMap` / `extends` → resultMap definition
- Completion: element tags, attribute names, Java class names (fully qualified), mapper method ids, property paths in `#{}` / `${}`, fragment and resultMap names
- Inlay hints: method signature at the end of the statement's opening-tag line; parameter type inside the placeholder (`#{Long id}`)
- Code action: `Generate MyBatis Tag` on a mapper interface method, also available as `:MybatisGenerateTag`

## Installation

```lua
{
  "ishianecho/nvim-mybatis",
  opts = {},
}
```

Requires Node.js on `PATH` and the java parser from nvim-treesitter.

## Configuration

```lua
{
  classpaths = { "src/main" },
  debug = false,
  lsp = true,
  mapper_glob = "**/*[Mm]apper*",
  parser = "auto",
}
```

- `lsp`: attach the built-in language server (definition, completion, inlay hints, code actions); `false` keeps only the treesitter-based jump
- `parser`: grammar for mapper XML — `auto` uses [tree-sitter-mybatis](https://github.com/ishianecho/tree-sitter-mybatis) when installed and falls back to the built-in `xml` parser; `mybatis` requires it (warns and falls back if missing); `xml` always uses the built-in one
- `classpaths` / `mapper_glob`: where java classes and mapper XML files are scanned

The server runs as an LSP client named `"mybatis"` (started with `vim.lsp.start()`, `root_dir` = detected project root) and maps buffer-local `gd` to `:MybatisJump` on mapper XML buffers and java buffers under a Maven/Gradle root. Customize it with an `LspAttach` autocmd filtered by `client.name == "mybatis"`:

```lua
vim.api.nvim_create_autocmd("LspAttach", {
  callback = function(args)
    local client = vim.lsp.get_client_by_id(args.data.client_id)
    if client and client.name == "mybatis" then
      vim.keymap.set("n", "gd", "<Cmd>MybatisJump<CR>", { buffer = args.buf })
    end
  end,
})
```

For full control, set `lsp = false` and manage the client yourself with `vim.lsp.config` / `vim.lsp.enable` (keep the name `"mybatis"`):

```lua
vim.lsp.config("mybatis", {
  cmd = { "node", "/path/to/nvim-mybatis/server/dist/mybatis.mjs" },
  filetypes = { "xml", "mybatis", "java" },
  root_markers = { "pom.xml", "build.gradle" },
  init_options = {
    mapper_glob = "**/*[Mm]apper*",
    classpaths = { "src/main" },
  },
})

vim.lsp.enable("mybatis")
```

With the plain `xml` parser, `#{}` / `${}` parameters are detected from line text, so multi-line parameters are not recognized.

## Commands

- `:MybatisJump`: jump between mapper XML and Java; falls back to `vim.lsp.buf.definition()` when MyBatis has no target
- `:MybatisGenerateTag`: generate the CRUD XML tag for the mapper method under the cursor

## Contributing

Issues and feature requests are welcome at the [GitHub Issues page](https://github.com/ishianecho/nvim-mybatis/issues).

## License

[MIT](LICENSE)

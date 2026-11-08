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

Requires Node.js on `PATH` and the java parser from nvim-treesitter. If `server/dist` is missing, build it with `cd server && pnpm install && pnpm build`.

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

The server runs as an LSP client named `"mybatis"` (started with `vim.lsp.start()`, `root_dir` = detected project root) and maps buffer-local `gd` to `:MybatisJump` on mapper XML buffers and java buffers under a Maven/Gradle root. Customize with a `LspAttach` autocmd filtered by `client.name == "mybatis"`; for full control set `lsp = false` and start the server yourself with `cmd = { "node", "<plugin>/server/dist/mybatis.mjs" }` (keep the name `"mybatis"`).

With the plain `xml` parser, `#{}` / `${}` parameters are detected from line text, so multi-line parameters are not recognized.

## Commands

- `:MybatisJump`: jump between mapper XML and Java; falls back to `vim.lsp.buf.definition()` when MyBatis has no target
- `:MybatisGenerateTag`: generate the CRUD XML tag for the mapper method under the cursor

## Contributing

Issues and feature requests are welcome at the [GitHub Issues page](https://github.com/ishianecho/nvim-mybatis/issues).

## License

MIT — see [LICENSE](LICENSE)

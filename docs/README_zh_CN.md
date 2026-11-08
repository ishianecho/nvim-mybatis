# nvim-mybatis

简体中文 | [English](https://github.com/ishianecho/nvim-mybatis/blob/main/docs/README.md)

一款 Neovim 的 MyBatis 插件：在 Java Mapper 接口与 XML 文件之间跳转，内置语言服务器提供补全、Inlay 提示与代码操作

## 功能

- 导航（`gd`）
  - XML → Java：类型属性（`namespace`、`resultType`、`parameterType`、`type`、`javaType`、`ofType`、`typeHandler`）→ 类；语句 `id` → Mapper 方法；`<result property>` → 实体字段；`#{param.path}` → 参数或实体字段
  - Java → XML：Mapper 方法 → 语句标签；实体字段 → `<result property>`；接口 → `<mapper>` 根标签
  - XML → XML：`<include refid>` → `<sql>`；`resultMap` / `extends` → resultMap 定义
- 补全：元素标签、属性名、Java 类名（全限定名）、Mapper 方法名、`#{}` / `${}` 内的属性路径、片段与 resultMap 名称
- Inlay 提示：方法签名显示在语句起始标签所在行的行尾；参数类型显示在占位符内部（`#{Long id}`）
- 代码操作：在 Mapper 接口方法上 `Generate MyBatis Tag`，也可用 `:MybatisGenerateTag`

## 安装

```lua
{
  "ishianecho/nvim-mybatis",
  opts = {},
}
```

需要 `PATH` 中的 Node.js 与 nvim-treesitter 的 java 解析器


## 配置

```lua
{
  classpaths = { "src/main" },
  debug = false,
  lsp = true,
  mapper_glob = "**/*[Mm]apper*",
  parser = "auto",
}
```

- `lsp`：附加内置语言服务器（定义、补全、Inlay 提示、代码操作）；`false` 仅保留基于 treesitter 的跳转
- `parser`：Mapper XML 使用的语法 —— `auto` 在已安装 [tree-sitter-mybatis](https://github.com/ishianecho/tree-sitter-mybatis) 时使用它，否则回退到内置 `xml` 解析器；`mybatis` 强制使用（缺失时警告并回退）；`xml` 始终使用内置解析器
- `classpaths` / `mapper_glob`：扫描 Java 类与 Mapper XML 文件的位置

服务器以名为 `"mybatis"` 的 LSP 客户端运行（通过 `vim.lsp.start()` 启动，`root_dir` 为检测到的项目根目录），并在 Mapper XML 缓冲区与 Maven/Gradle 根目录下的 Java 缓冲区上映射 buffer-local 的 `gd` 到 `:MybatisJump`，可通过按 `client.name == "mybatis"` 过滤的 `LspAttach` 自动命令自定义：

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

如需完全掌控，设置 `lsp = false` 后通过 `vim.lsp.config` / `vim.lsp.enable` 自行管理（保持名称 `"mybatis"`）：

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

仅使用 `xml` 解析器时，`#{}` / `${}` 参数通过行文本识别，不支持跨行参数

## 命令

- `:MybatisJump`：在 Mapper XML 与 Java 之间跳转；MyBatis 无目标时回退到 `vim.lsp.buf.definition()`
- `:MybatisGenerateTag`：为光标处的 Mapper 方法生成 CRUD XML 标签

## 参与贡献

欢迎在 [GitHub Issues](https://github.com/ishianecho/nvim-mybatis/issues) 提交问题与功能请求

## 许可证

[MIT](LICENSE)

# nvim-mybatis

简体中文 | [English](https://github.com/ishianecho/nvim-mybatis/blob/main/docs/README.md)

一款基于 Tree-sitter 的轻量级 Neovim 插件，用于增强 Java MyBatis Mapper 接口与其对应 XML 文件之间的导航体验。

## ✨ 功能特性

### 🔄 **导航**

#### XML → Java

- 从 MyBatis XML 类型属性跳转到其对应的 Java 类型，支持的属性包括：`namespace`, `resultType`, `parameterType`, `type`, `javaType`, `ofType`, `typeHandler`。
- 从 SQL 语句标签的 `id` 属性跳转到 Mapper 接口中对应的方法。
- 从 `<result property="...">` 标签跳转到其 Java 实体类中的对应字段。

#### Java 代码 → XML 映射文件

- 从 Mapper 接口跳转到其 XML 文件中的 `<mapper namespace="...">` 声明处。
- 从 Mapper 接口方法跳转到 XML 文件中对应的 SQL 语句标签处。

#### XML → XML 导航

- 从 `<include refid="...">` 标签跳转到其目标 `<sql id="...">` 定义处，支持简单引用和全限定引用。
- 从 `<resultMap extends="...">` 或 `<select resultMap="...">` 标签跳转到其目标 `<resultMap>` 定义处。

### 🎯 **智能代码补全**

- **[blink.cmp](https://github.com/Saghen/blink.cmp) 集成**: 为 `namespace`、`resultType`、`parameterType`、`type`、`javaType` 和 `ofType` 属性提供包含包名/类名建议的自动补全。

### **代码操作（`Code Action`）**

- `nvim-mybatis` 会将`Code Action`注入到名为`jdtls`的语言服务器中。符合条件的条目会在调用`vim.lsp.buf.code_action`时提供，这需要一个已连接的`jdtls`服务器。
- `Generate MyBatis Tag`：当光标指向 Mapper 接口中的一个方法时，此操作会智能判断`CRUD`类型，并在相关联的`XML`文件中生成对应的`XML tag`代码片段。
- 同样的操作也可以通过`:MybatisGenerateTag`命令执行。

## 📦 安装

<details>
<summary>Lazy.nvim</summary>

```lua
{
  "ishi-o/nvim-mybatis",
  opts = {},
}
```

</details>

<details>
<summary>blink.cmp 集成配置</summary>

如需启用自动补全支持，请按如下方式配置 blink.cmp：

```lua
require("blink.cmp").setup({
	sources = {
		default = {
			"lsp",
			"path",
			"snippets",
			"buffer",
			"mybatis", -- 添加此补全源
		},
		providers = {
			mybatis = {
				name = "Mybatis",
				module = "nvim-mybatis.completion.blink",
			},
		},
	},
})
```

</details>

## ⚙️ 配置

通过插件的 `opts` 表传入配置。可用选项和默认值请参见 `:help nvim-mybatis-api`。

## ⌨️ 命令

调用 `require("nvim-mybatis").setup()` 后，可以使用以下命令：

- `:MybatisJump`：在当前 Java Mapper 或 XML 映射文件之间跳转。如果 nvim-mybatis 找不到目标，则回退到 `vim.lsp.buf.definition()`。
- `:MybatisGenerateTag`：为光标所在的 Mapper 方法生成 CRUD XML 标签。

可选配置 `autocmd = true` 会保留原有的文件类型 autocmd 和 buffer-local `gd` 映射。设置为 `false` 后，可以只使用上述命令而不安装这些 autocmd。

## 📝 注意事项

- **[nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)**：需要使用其 Java 与 XML 解析器。
- 公开的配置、Lua API 和类型参考请查看生成的 `:help nvim-mybatis-api` 文档。

## 🤝 参与贡献

欢迎提交问题报告和功能请求，请访问 [GitHub Issues 页面](https://github.com/ishi-o/nvim-mybatis/issues)。

## 📄 许可证

MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

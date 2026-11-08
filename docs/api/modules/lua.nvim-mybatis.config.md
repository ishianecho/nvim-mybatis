# global lua.nvim-mybatis.config








---

## methods
---

### M.setup
---
```lua
function M.setup(config: mybatis.NvimMybatisConfig?) ->  table
```












### M.get
---
```lua
function M.get() ->  mybatis.NvimMybatisConfig {
    classpaths = string[]?,
    debug = boolean?,
    lsp = boolean?,
    mapper_glob = string?,
    parser = mybatis.parser.Option?,
}
```















## fields
---

### M.values
---
```lua
M.values : mybatis.NvimMybatisConfig {
    classpaths: string[]?,
    debug: boolean?,
    lsp: boolean?,
    mapper_glob: string?,
    parser: mybatis.parser.Option?,
}
```

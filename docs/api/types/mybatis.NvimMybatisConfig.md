# class NvimMybatisConfig



- namespace: mybatis









---



## fields
---

### NvimMybatisConfig.classpaths
---
```lua
NvimMybatisConfig.classpaths : string[]?
```



Source roots; `java` and `resources` subdirectories are appended per scan kind








### NvimMybatisConfig.debug
---
```lua
NvimMybatisConfig.debug : boolean?
```



Enable debug mode








### NvimMybatisConfig.lsp
---
```lua
NvimMybatisConfig.lsp : boolean?
```



attach the built-in MyBatis language server (completion, inlay hints, code actions, definition); `false` keeps only treesitter-based jump








### NvimMybatisConfig.mapper_glob
---
```lua
NvimMybatisConfig.mapper_glob : string?
```



Glob pattern identifying mapper files by name








### NvimMybatisConfig.parser
---
```lua
NvimMybatisConfig.parser : mybatis.parser.Option?
```



Tree-sitter grammar for mapper XML

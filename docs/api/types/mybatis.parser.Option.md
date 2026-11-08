# alias Option
---

- namespace: mybatis.parser



```lua
(alias) Option = ("auto"|"mybatis"|"xml")
    | "auto" -- use tree-sitter-mybatis when installed, otherwise the built-in xml grammar
    | "mybatis" -- require tree-sitter-mybatis, fall back to xml with a warning
    | "xml" -- always use the built-in xml grammar

```

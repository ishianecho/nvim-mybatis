import type { CompletionItem, CompletionItemKind } from "vscode-languageserver";
import { CompletionItemKind as Kind } from "vscode-languageserver";
import type { Node, Tree } from "web-tree-sitter";
import type { BindingIndex } from "./project.mjs";
import { javaBuiltinTypes } from "./project.mjs";
import { parseXml } from "./tree.mjs";
import {
  STATEMENT_TAGS,
  TYPE_ATTRIBUTES,
  attributeOf,
  attributeNameAt,
  elementName,
  enclosingNamespace,
  enclosingResultMap,
  enclosingStatement,
  isElementNode,
  walkNamed,
} from "./tree.mjs";

interface ElementSpec {
  snippet: string;
  attrs: string[];
}

const ELEMENTS: Record<string, ElementSpec> = {
  select: {
    snippet: '<select id="${1}">${2}</select>',
    attrs: [
      "id",
      "parameterType",
      "resultType",
      "resultMap",
      "flushCache",
      "timeout",
      "fetchSize",
      "statementType",
    ],
  },
  insert: {
    snippet: '<insert id="${1}">${2}</insert>',
    attrs: [
      "id",
      "parameterType",
      "flushCache",
      "timeout",
      "statementType",
      "useGeneratedKeys",
      "keyProperty",
      "keyColumn",
    ],
  },
  update: {
    snippet: '<update id="${1}">${2}</update>',
    attrs: ["id", "parameterType", "flushCache", "timeout", "statementType"],
  },
  delete: {
    snippet: '<delete id="${1}">${2}</delete>',
    attrs: ["id", "parameterType", "flushCache", "timeout", "statementType"],
  },
  sql: {
    snippet: '<sql id="${1}">${2}</sql>',
    attrs: ["id", "databaseId"],
  },
  include: {
    snippet: '<include refid="${1}"/>',
    attrs: ["refid", "databaseId"],
  },
  resultMap: {
    snippet: '<resultMap id="${1}" type="${2}">${3}</resultMap>',
    attrs: ["id", "type", "extends", "autoMapping"],
  },
  result: {
    snippet: '<result property="${1}" column="${2}"/>',
    attrs: ["property", "column", "javaType", "jdbcType", "typeHandler"],
  },
  id: {
    snippet: '<id property="${1}" column="${2}"/>',
    attrs: ["property", "column", "javaType", "jdbcType", "typeHandler"],
  },
  association: {
    snippet: '<association property="${1}" javaType="${2}">${3}</association>',
    attrs: [
      "property",
      "column",
      "javaType",
      "select",
      "resultMap",
      "columnPrefix",
      "notNullColumn",
    ],
  },
  collection: {
    snippet: '<collection property="${1}" ofType="${2}">${3}</collection>',
    attrs: ["property", "column", "ofType", "select", "resultMap", "columnPrefix", "notNullColumn"],
  },
  selectKey: {
    snippet: '<selectKey keyProperty="${1}" resultType="${2}">${3}</selectKey>',
    attrs: ["keyProperty", "resultType", "order", "statementType"],
  },
  if: {
    snippet: '<if test="${1}">${2}</if>',
    attrs: ["test"],
  },
  choose: {
    snippet: "<choose>${1}</choose>",
    attrs: [],
  },
  when: {
    snippet: '<when test="${1}">${2}</when>',
    attrs: ["test"],
  },
  otherwise: {
    snippet: "<otherwise>${1}</otherwise>",
    attrs: [],
  },
  trim: {
    snippet: '<trim prefix="${1}" suffixOverrides="${2}">${3}</trim>',
    attrs: ["prefix", "prefixOverrides", "suffix", "suffixOverrides"],
  },
  where: {
    snippet: "<where>${1}</where>",
    attrs: [],
  },
  set: {
    snippet: "<set>${1}</set>",
    attrs: [],
  },
  foreach: {
    snippet: '<foreach collection="${1}" item="${2}">${3}</foreach>',
    attrs: ["collection", "item", "index", "open", "separator", "close", "nullable"],
  },
  bind: {
    snippet: '<bind name="${1}" value="${2}"/>',
    attrs: ["name", "value"],
  },
};

const SQL_KEYWORDS = [
  "SELECT",
  "FROM",
  "WHERE",
  "AND",
  "OR",
  "NOT",
  "NULL",
  "IS",
  "IN",
  "BETWEEN",
  "LIKE",
  "AS",
  "DISTINCT",
  "JOIN",
  "INNER JOIN",
  "LEFT JOIN",
  "RIGHT JOIN",
  "FULL JOIN",
  "ON",
  "GROUP BY",
  "HAVING",
  "ORDER BY",
  "ASC",
  "DESC",
  "LIMIT",
  "OFFSET",
  "UNION",
  "CASE",
  "WHEN",
  "THEN",
  "ELSE",
  "END",
  "INSERT INTO",
  "VALUES",
  "UPDATE",
  "SET",
  "DELETE FROM",
  "TRUNCATE",
  "DUPLICATE",
  "KEY",
  "CALL",
  "CURRENT_TIMESTAMP",
  "OVER",
  "PARTITION BY",
  "TRUE",
  "FALSE",
];

const SQL_TEXT_TAGS = [
  "sql",
  "if",
  "choose",
  "when",
  "otherwise",
  "trim",
  "where",
  "set",
  "foreach",
  "bind",
];

interface Item extends CompletionItem {
  kind?: CompletionItemKind;
}

function item(label: string, kind: CompletionItemKind, detail?: string): Item {
  return { label, kind, detail, insertText: label, filterText: label };
}

function rank(items: Item[], partial: string): CompletionItem[] {
  const needle = partial.toLowerCase();
  const scored = items.map((entry, order) => {
    const label = entry.label.toLowerCase();
    let score = 900 + order;
    if (needle.length > 0) {
      if (label.startsWith(needle)) {
        score = label.length - needle.length;
      } else if (label.includes(needle)) {
        score = 400 + label.indexOf(needle);
      }
    }
    entry.sortText = `${String(score).padStart(6, "0")}${entry.label}`;
    return entry;
  });
  scored.sort((a, b) => (a.sortText! < b.sortText! ? -1 : 1));
  return scored;
}

function sqlIds(tree: Tree): string[] {
  const ids: string[] = [];
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node) || elementName(node) !== "sql") {
      continue;
    }
    const id = attributeOf(node, "id")?.value;
    if (id) {
      ids.push(id);
    }
  }
  return ids;
}

function resultMapIds(tree: Tree): string[] {
  const ids: string[] = [];
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node) || elementName(node) !== "resultMap") {
      continue;
    }
    const id = attributeOf(node, "id")?.value;
    if (id) {
      ids.push(id);
    }
  }
  return ids;
}

function classItems(index: BindingIndex): Item[] {
  const items: Item[] = index.allJava().map((entry) => item(entry.fqn, Kind.Class, entry.name));
  for (const builtin of javaBuiltinTypes) {
    items.push(item(builtin.simple, Kind.Class, builtin.full));
  }
  return items;
}

function fieldItems(index: BindingIndex, classname: string): Item[] {
  const entity = index.resolveClass(classname);
  if (!entity) {
    return [];
  }
  return [...entity.info.fields.keys()].map((name) =>
    item(name, Kind.Field, entity.info.fields.get(name)),
  );
}

function paramItems(index: BindingIndex, node: Node, typed: string): Item[] {
  const statement = enclosingStatement(node);
  if (!statement) {
    return [];
  }
  const parameterType = attributeOf(statement, "parameterType")?.value;
  const namespace = enclosingNamespace(node);
  const statementId = attributeOf(statement, "id")?.value;
  let methods = namespace ? index.mapperMethods(namespace) : null;
  if (methods && statementId) {
    const match = methods.filter((m) => m.name === statementId);
    if (match.length > 0) {
      methods = match;
    }
  }
  const raw = typed.split(".").filter((s) => s.length > 0);
  const segments = typed.endsWith(".") ? raw : raw.slice(0, -1);
  let baseType: string | undefined;
  let headMatched = false;
  const head = segments[0];
  if (head && methods) {
    outer: for (const method of methods) {
      for (const param of method.params) {
        if (param.name === head || param.annotation === head) {
          baseType = param.type;
          headMatched = true;
          segments.shift();
          break outer;
        }
      }
    }
  }
  if (!baseType && segments.length > 0 && parameterType) {
    baseType = parameterType;
  }
  if (segments.length === 0 && !headMatched && methods) {
    const params = methods.flatMap((m) => m.params);
    if (params.length > 1 || params.some((param) => param.annotation)) {
      return params.map((param) =>
        item(param.annotation ?? param.name, Kind.Field, param.type ?? param.name),
      );
    }
  }
  if (!baseType && methods && methods.length === 1 && methods[0].params.length === 1) {
    baseType = parameterType ?? methods[0].params[0].type;
  }
  if (baseType) {
    const walk = (base: string | undefined): Item[] => {
      if (!base) {
        return [];
      }
      let type = base;
      for (const segment of segments) {
        const entity = index.resolveClass(type);
        const next = entity?.info.fields.get(segment);
        if (!entity || !next) {
          return [];
        }
        type = next;
      }
      return fieldItems(index, type);
    };
    const viaParam = walk(baseType);
    if (viaParam.length > 0 || !headMatched) {
      return viaParam;
    }
    return walk(parameterType);
  }
  return [];
}

function inSqlRegion(node: Node): boolean {
  let current: Node | null = node;
  while (current) {
    const t = current.type;
    if (t === "Attribute") {
      return false;
    }
    if (t === "CharData" || t === "content") {
      let parent: Node | null = current.parent;
      while (parent) {
        if (isElementNode(parent)) {
          const name = elementName(parent);
          return name !== null && (SQL_TEXT_TAGS.includes(name) || STATEMENT_TAGS.includes(name));
        }
        parent = parent.parent;
      }
      return false;
    }
    if (isElementNode(current)) {
      return false;
    }
    current = current.parent;
  }
  return false;
}

export async function completeAt(
  text: string,
  row: number,
  column: number,
  index: BindingIndex,
): Promise<CompletionItem[]> {
  const lines = text.split("\n");
  const line = lines[row] ?? "";
  const before = line.slice(0, column);
  const partial = before.match(/[A-Za-z0-9_.]*$/)?.[0] ?? "";
  const tree = await parseXml(text);
  if (!tree) {
    return [];
  }
  const node = tree.rootNode.descendantForPosition({ row, column }) ?? tree.rootNode;

  let items: Item[] | null = null;
  const attr = attributeNameAt(node);
  if (attr) {
    if (TYPE_ATTRIBUTES.includes(attr.name)) {
      items = classItems(index);
    } else if (attr.name === "id") {
      const element = enclosingStatement(node);
      const namespace = enclosingNamespace(node);
      if (element && namespace) {
        const methods = index.mapperMethods(namespace);
        items = methods ? methods.map((m) => item(m.name, Kind.Field)) : [];
      }
    } else if (attr.name === "property") {
      const resultMap = enclosingResultMap(node);
      const type = resultMap ? attributeOf(resultMap, "type")?.value : undefined;
      items = type ? fieldItems(index, type) : [];
    } else if (attr.name === "refid") {
      items = sqlIds(tree).map((id) => item(id, Kind.Property));
    } else if (attr.name === "resultMap" || attr.name === "extends") {
      items = resultMapIds(tree).map((id) => item(id, Kind.Property));
    } else {
      items = [];
    }
  }

  if (items === null) {
    const typed = before.match(/[#$]\{([^}]*)$/)?.[1];
    if (typed !== undefined) {
      items = paramItems(index, node, typed);
    }
  }

  if (items === null) {
    const tagPartial = before.match(/<(\w*)$/)?.[1];
    if (tagPartial !== undefined) {
      items = Object.keys(ELEMENTS).map((tag) => ({
        label: tag,
        kind: Kind.Snippet,
        insertText: ELEMENTS[tag].snippet.replace(/^</, ""),
        filterText: tag,
        detail: ELEMENTS[tag].snippet,
        insertTextFormat: 2,
      }));
    }
  }

  if (items === null) {
    const attrCtx = before.match(/<(\w+)\s+([^<>]*)$/);
    if (attrCtx) {
      const quotes = (attrCtx[2].match(/"/g) ?? []).length;
      if (quotes % 2 === 0) {
        const spec = ELEMENTS[attrCtx[1]];
        items = spec
          ? spec.attrs.map((attr) => ({
              label: attr,
              kind: Kind.Property,
              insertText: `${attr}=""`,
              filterText: attr,
            }))
          : [];
      }
    }
  }

  if (items === null && inSqlRegion(node) && /\w/.test(partial)) {
    items = SQL_KEYWORDS.map((keyword) => item(keyword, Kind.Keyword));
  }

  tree.delete();
  return rank(items ?? [], partial);
}

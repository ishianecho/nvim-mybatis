import { readFile } from "node:fs/promises";
import type { Location } from "vscode-languageserver";
import { URI } from "vscode-uri";
import type { Node, Tree } from "web-tree-sitter";
import type { BindingIndex, XmlMapper } from "./project.mjs";
import { parseJava, parseXml } from "./tree.mjs";
import {
  PROPERTY_TAGS,
  ROOT_TAGS,
  STATEMENT_TAGS,
  TYPE_ATTRIBUTES,
  attributeOf,
  attributeNameAt,
  elementName,
  enclosingNamespace,
  enclosingResultMap,
  enclosingStatement,
  isElementNode,
  javaFieldPosition,
  javaMethodPosition,
  javaMethodTarget,
  javaParamPosition,
  javaTypePosition,
  parseJavaFile,
  startTagNode,
  walkNamed,
  xmlElementPosition,
  type SourcePosition,
} from "./tree.mjs";

function location(file: string, position: SourcePosition): Location {
  return {
    uri: URI.file(file).toString(),
    range: {
      start: { line: position.row, character: position.column },
      end: { line: position.row, character: position.column },
    },
  };
}

async function fileLocation(
  file: string,
  parse: (text: string) => Promise<Tree | null>,
  find: (tree: Tree) => SourcePosition | null,
): Promise<Location | null> {
  let text: string;
  try {
    text = await readFile(file, "utf8");
  } catch {
    return null;
  }
  const tree = await parse(text);
  if (!tree) {
    return null;
  }
  const position = find(tree);
  tree.delete();
  return position ? location(file, position) : null;
}

function attrValue(text: string): string {
  return text.replace(/^['"]|['"]$/g, "");
}

async function classLocation(index: BindingIndex, classname: string): Promise<Location | null> {
  const entry = index.resolveClass(classname);
  if (!entry) {
    return null;
  }
  return fileLocation(entry.path, parseJava, (tree) => javaTypePosition(tree));
}

async function methodLocation(
  index: BindingIndex,
  namespace: string,
  method: string,
): Promise<Location | null> {
  const entry = index.resolveClass(namespace);
  if (!entry) {
    return null;
  }
  return fileLocation(entry.path, parseJava, (tree) => javaMethodPosition(tree, method));
}

async function fieldLocation(
  index: BindingIndex,
  classname: string,
  field: string,
): Promise<Location | null> {
  const entry = index.resolveClass(classname);
  if (!entry || !entry.info.fields.has(field)) {
    return null;
  }
  return fileLocation(entry.path, parseJava, (tree) => javaFieldPosition(tree, field));
}

async function entityFieldLocation(
  index: BindingIndex,
  type: string,
  segments: string[],
): Promise<Location | null> {
  if (segments.length === 0) {
    return null;
  }
  let current = type;
  for (let i = 0; i < segments.length - 1; i++) {
    const entity = index.resolveClass(current);
    const next = entity?.info.fields.get(segments[i]);
    if (!entity || !next) {
      return null;
    }
    current = next;
  }
  return fieldLocation(index, current, segments[segments.length - 1]);
}

async function sqlLocation(mapper: XmlMapper | null, id: string): Promise<Location | null> {
  if (!mapper) {
    return null;
  }
  return fileLocation(mapper.path, parseXml, (tree) => xmlElementPosition(tree, "sql", id));
}

async function refidLocation(
  index: BindingIndex,
  file: string,
  tree: Tree,
  value: string,
): Promise<Location | null> {
  const local = xmlElementPosition(tree, "sql", value);
  if (local) {
    return location(file, local);
  }
  const dot = value.lastIndexOf(".");
  if (dot > 0) {
    const qualified = await sqlLocation(
      index.xmlForNamespace(value.slice(0, dot)),
      value.slice(dot + 1),
    );
    if (qualified) {
      return qualified;
    }
  }
  for (const mapper of index.xmlByPath.values()) {
    if (mapper.path === file || !mapper.sqlIds.has(value)) {
      continue;
    }
    const found = await sqlLocation(mapper, value);
    if (found) {
      return found;
    }
  }
  return null;
}

async function paramLocation(
  index: BindingIndex,
  node: Node,
  placeholder: string,
): Promise<Location | null> {
  const segments = placeholder.split(".").filter((s) => s.length > 0);
  if (segments.length === 0) {
    return null;
  }
  const statement = enclosingStatement(node);
  if (!statement) {
    return null;
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
  if (methods && namespace) {
    const entry = index.resolveClass(namespace);
    for (const method of methods) {
      for (const param of method.params) {
        if (param.name === segments[0] || param.annotation === segments[0]) {
          if (segments.length === 1) {
            return entry
              ? fileLocation(entry.path, parseJava, (tree) =>
                  javaParamPosition(tree, method.name, segments[0]),
                )
              : null;
          }
          const viaParam = param.type
            ? await entityFieldLocation(index, param.type, segments.slice(1))
            : null;
          if (viaParam) {
            return viaParam;
          }
          return parameterType
            ? entityFieldLocation(index, parameterType, segments.slice(1))
            : null;
        }
      }
    }
    if (methods.length === 1 && methods[0].params.length === 1 && methods[0].params[0].type) {
      const resolved = await entityFieldLocation(index, methods[0].params[0].type, segments);
      if (resolved) {
        return resolved;
      }
    }
  }
  return parameterType ? entityFieldLocation(index, parameterType, segments) : null;
}

function propertyPosition(
  tree: Tree,
  property: string,
  resultMapId: string,
): SourcePosition | null {
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node)) {
      continue;
    }
    const name = elementName(node);
    if (!name || !PROPERTY_TAGS.includes(name)) {
      continue;
    }
    if (attributeOf(node, "property")?.value !== property) {
      continue;
    }
    const resultMap = enclosingResultMap(node);
    if (!resultMap || attributeOf(resultMap, "id")?.value !== resultMapId) {
      continue;
    }
    const stag = startTagNode(node);
    const tag = stag?.namedChild(0);
    if (tag && tag.type === "Name") {
      return { row: tag.startPosition.row, column: tag.startPosition.column };
    }
  }
  return null;
}

async function resultMapPropertyLocation(
  index: BindingIndex,
  fqn: string,
  field: string,
): Promise<Location | null> {
  for (const mapper of index.xmlByPath.values()) {
    for (const resultMap of mapper.resultMaps.values()) {
      const typeEntry = resultMap.type ? index.resolveClass(resultMap.type) : null;
      if (!typeEntry || typeEntry.fqn !== fqn || !resultMap.properties.has(field)) {
        continue;
      }
      const found = await fileLocation(mapper.path, parseXml, (tree) =>
        propertyPosition(tree, field, resultMap.id),
      );
      if (found) {
        return found;
      }
    }
  }
  return null;
}

async function xmlDefinition(
  file: string,
  text: string,
  line: number,
  character: number,
  index: BindingIndex,
): Promise<Location | Location[] | null> {
  const tree = await parseXml(text);
  if (!tree) {
    return null;
  }
  try {
    const node =
      tree.rootNode.descendantForPosition({ row: line, column: character }) ?? tree.rootNode;
    const attr = attributeNameAt(node);
    if (attr) {
      const value = attrValue(attr.value.text);
      if (TYPE_ATTRIBUTES.includes(attr.name)) {
        return classLocation(index, value);
      }
      if (attr.name === "id" && enclosingStatement(node)) {
        const namespace = enclosingNamespace(node);
        return namespace ? methodLocation(index, namespace, value) : null;
      }
      if (attr.name === "refid") {
        return refidLocation(index, file, tree, value);
      }
      if (attr.name === "resultMap" || attr.name === "extends") {
        const local = xmlElementPosition(tree, "resultMap", value);
        return local ? location(file, local) : null;
      }
      if (attr.name === "property") {
        const resultMap = enclosingResultMap(node);
        const type = resultMap ? attributeOf(resultMap, "type")?.value : undefined;
        return type ? fieldLocation(index, type, value) : null;
      }
      return null;
    }
    const lineText = text.split("\n")[line] ?? "";
    for (const match of lineText.matchAll(/[#$]\{([^}]*)\}/g)) {
      const start = (match.index ?? 0) + 2;
      if (character >= start && character < start + match[1].length) {
        return paramLocation(index, node, match[1]);
      }
    }
    const statement = enclosingStatement(node);
    if (statement) {
      const id = attributeOf(statement, "id")?.value;
      const namespace = enclosingNamespace(node);
      if (id && namespace) {
        return methodLocation(index, namespace, id);
      }
      return null;
    }
    let current: Node | null = node;
    while (current) {
      if (isElementNode(current)) {
        const name = elementName(current);
        if (name && ROOT_TAGS.includes(name)) {
          const namespace = attributeOf(current, "namespace")?.value;
          return namespace ? classLocation(index, namespace) : null;
        }
      }
      current = current.parent;
    }
    return null;
  } finally {
    tree.delete();
  }
}

function onMethodOrParamName(tree: Tree, line: number, character: number): boolean {
  let node: Node | null = tree.rootNode.descendantForPosition({ row: line, column: character });
  while (node && node.type !== "method_declaration") {
    const parent = node.parent;
    if (!parent) {
      return false;
    }
    const nameField = parent.childForFieldName("name");
    if (
      nameField &&
      (parent.type === "method_declaration" || parent.type === "formal_parameter") &&
      nameField.id === node.id
    ) {
      return true;
    }
    node = parent;
  }
  return false;
}

async function javaDefinition(
  text: string,
  line: number,
  character: number,
  index: BindingIndex,
): Promise<Location | Location[] | null> {
  const tree = await parseJava(text);
  if (!tree) {
    return null;
  }
  try {
    const target = javaMethodTarget(tree, line, character);
    if (target && onMethodOrParamName(tree, line, character)) {
      const mapper = index.xmlForNamespace(target.fqn);
      if (!mapper) {
        return null;
      }
      for (const tag of STATEMENT_TAGS) {
        const found = await fileLocation(mapper.path, parseXml, (t) =>
          xmlElementPosition(t, tag, target.methodName),
        );
        if (found) {
          return found;
        }
      }
      return null;
    }
    const info = parseJavaFile(tree);
    const cursor = tree.rootNode.descendantForPosition({ row: line, column: character });
    let current: Node | null = cursor;
    while (current) {
      if (current.type === "field_declaration") {
        const field = current.childForFieldName("declarator")?.childForFieldName("name")?.text;
        if (field && info.typeName) {
          const fqn = info.packageName ? `${info.packageName}.${info.typeName}` : info.typeName;
          return resultMapPropertyLocation(index, fqn, field);
        }
        return null;
      }
      current = current.parent;
    }
    return null;
  } finally {
    tree.delete();
  }
}

export async function definitionAt(
  file: string,
  text: string,
  line: number,
  character: number,
  index: BindingIndex,
): Promise<Location | Location[] | null> {
  if (file.endsWith(".java")) {
    return javaDefinition(text, line, character, index);
  }
  return xmlDefinition(file, text, line, character, index);
}

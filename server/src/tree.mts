import { Parser, Language } from "web-tree-sitter";
import type { Node, Tree } from "web-tree-sitter";
import { fileURLToPath } from "node:url";
import * as path from "node:path";

const outDir = path.dirname(fileURLToPath(import.meta.url));

let parsers: Promise<{ xml: Parser; java: Parser }> | null = null;

function grammarPath(file: string): string {
  return path.join(outDir, "grammars", file);
}

export function initParsers(): Promise<{ xml: Parser; java: Parser }> {
  parsers ??= (async () => {
    await Parser.init({
      locateFile: (basename: string) => path.join(outDir, basename),
    });
    const [mybatis, java] = await Promise.all([
      Language.load(grammarPath("mybatis.wasm")),
      Language.load(grammarPath("java.wasm")),
    ]);
    const xml = new Parser();
    xml.setLanguage(mybatis);
    const javaParser = new Parser();
    javaParser.setLanguage(java);
    return { xml, java: javaParser };
  })();
  return parsers;
}

export async function parseXml(content: string): Promise<Tree | null> {
  const { xml } = await initParsers();
  return xml.parse(content);
}

export async function parseJava(content: string): Promise<Tree | null> {
  const { java } = await initParsers();
  return java.parse(content);
}

export const STATEMENT_TAGS = ["select", "insert", "update", "delete", "procedure", "selectKey"];
export const ROOT_TAGS = ["mapper", "sqlMap"];
export const TYPE_ATTRIBUTES = [
  "namespace",
  "resultType",
  "parameterType",
  "type",
  "javaType",
  "ofType",
  "typeHandler",
];
export const PROPERTY_TAGS = ["id", "result", "association", "collection"];

const NAMED_ELEMENT_TYPES: Record<string, string> = {
  Mapper: "mapper",
  MapperSTag: "mapper",
  MapperETag: "mapper",
  SqlMap: "sqlMap",
  SqlMapSTag: "sqlMap",
  SqlMapETag: "sqlMap",
};

const TAG_TYPES = new Set([
  "STag",
  "ETag",
  "EmptyElemTag",
  "MapperSTag",
  "MapperETag",
  "SqlMapSTag",
  "SqlMapETag",
]);

function isTagNode(node: Node): boolean {
  return TAG_TYPES.has(node.type) || isElementNode(node);
}

export function isElementNode(node: Node): boolean {
  const t = node.type;
  return t === "element" || t === "Mapper" || t === "SqlMap" || t.endsWith("Elem");
}

export function elementName(node: Node): string | null {
  const mapped = NAMED_ELEMENT_TYPES[node.type];
  if (mapped) {
    return mapped;
  }
  if (!isTagNode(node)) {
    return null;
  }
  const child = node.namedChild(0);
  if (child && child.type === "Name") {
    return child.text;
  }
  if (node.type === "element") {
    const stag = node.namedChild(0);
    const name = stag && stag.namedChild(0);
    return name && name.type === "Name" ? name.text : null;
  }
  return null;
}

export function attributeOf(node: Node, name: string): { value: string; node: Node } | null {
  let target: Node | null = node;
  while (target && !isTagNode(target)) {
    target = target.parent;
  }
  if (!target) {
    return null;
  }
  const holders: Node[] = [target];
  for (let i = 0; i < target.namedChildCount; i++) {
    const child = target.namedChild(i);
    if (child && TAG_TYPES.has(child.type)) {
      holders.push(child);
    }
  }
  for (const holder of holders) {
    for (let i = 0; i < holder.namedChildCount; i++) {
      const child = holder.namedChild(i);
      if (child && child.type === "Attribute") {
        const nameNode = child.namedChild(0);
        const valueNode = child.namedChild(1);
        if (nameNode && nameNode.text === name && valueNode) {
          return { value: valueNode.text.replace(/^['"]|['"]$/g, ""), node: valueNode };
        }
      }
    }
  }
  return null;
}

export function startTagNode(node: Node): Node | null {
  const t = node.type;
  if (t === "STag" || t === "EmptyElemTag" || t === "MapperSTag" || t === "SqlMapSTag") {
    return node;
  }
  for (let i = 0; i < node.namedChildCount; i++) {
    const child = node.namedChild(i);
    if (child && (child.type === "STag" || child.type === "EmptyElemTag")) {
      return child;
    }
  }
  return null;
}

export function enclosingStatement(node: Node): Node | null {
  let current: Node | null = node;
  while (current) {
    if (isElementNode(current)) {
      const name = elementName(current);
      if (name && STATEMENT_TAGS.includes(name)) {
        return current;
      }
    }
    current = current.parent;
  }
  return null;
}

export function enclosingResultMap(node: Node): Node | null {
  let current: Node | null = node;
  while (current) {
    if (isElementNode(current) && elementName(current) === "resultMap") {
      return current;
    }
    current = current.parent;
  }
  return null;
}

export function enclosingNamespace(node: Node): string | null {
  let current: Node | null = node;
  while (current) {
    if (isElementNode(current)) {
      const name = elementName(current);
      if (name && ROOT_TAGS.includes(name)) {
        return attributeOf(current, "namespace")?.value ?? null;
      }
    }
    current = current.parent;
  }
  return null;
}

export function attributeNameAt(node: Node): { name: string; value: Node } | null {
  let current: Node | null = node;
  while (current) {
    if (current.type === "Attribute") {
      const nameNode = current.namedChild(0);
      const valueNode = current.namedChild(1);
      if (nameNode && valueNode) {
        return { name: nameNode.text, value: valueNode };
      }
      return null;
    }
    current = current.parent;
  }
  return null;
}

export function* walkNamed(node: Node): Generator<Node> {
  yield node;
  for (let i = 0; i < node.namedChildCount; i++) {
    const child = node.namedChild(i);
    if (child) {
      yield* walkNamed(child);
    }
  }
}

export interface ParamInfo {
  name: string;
  type?: string;
  annotation?: string;
}

export interface MethodInfo {
  name: string;
  params: ParamInfo[];
}

export interface JavaFile {
  packageName: string;
  typeName: string | null;
  isInterface: boolean;
  methods: Map<string, MethodInfo>;
  fields: Map<string, string>;
}

export function simplifyType(node: Node): string | null {
  if (node.type === "type_identifier") {
    return node.text;
  }
  if (node.type === "generic_type") {
    const container = node.namedChild(0);
    if (!container) {
      return null;
    }
    const args = node.namedChild(1);
    if (!args) {
      return container.text;
    }
    if (container.text === "List" || container.text === "Set") {
      const first = args.namedChild(0);
      return first ? simplifyType(first) : null;
    }
    if (container.text === "Map") {
      const value = args.namedChild(1);
      return value ? simplifyType(value) : null;
    }
    return container.text;
  }
  return null;
}

function collectParams(parameters: Node): ParamInfo[] {
  const params: ParamInfo[] = [];
  for (let i = 0; i < parameters.namedChildCount; i++) {
    const child = parameters.namedChild(i);
    if (!child || child.type !== "formal_parameter") {
      continue;
    }
    const nameNode = child.childForFieldName("name");
    const typeNode = child.childForFieldName("type");
    if (!nameNode) {
      continue;
    }
    const annotation = child.text.match(/@Param\s*\(\s*"([^"]+)"\s*\)/)?.[1];
    params.push({
      name: nameNode.text,
      type: typeNode ? (simplifyType(typeNode) ?? undefined) : undefined,
      annotation,
    });
  }
  return params;
}

export function parseJavaFile(tree: Tree): JavaFile {
  const info: JavaFile = {
    packageName: "",
    typeName: null,
    isInterface: false,
    methods: new Map(),
    fields: new Map(),
  };
  const visit = (node: Node) => {
    switch (node.type) {
      case "package_declaration": {
        for (let i = 0; i < node.namedChildCount; i++) {
          const child = node.namedChild(i);
          if (child && child.type === "scoped_identifier") {
            info.packageName = child.text;
            break;
          }
        }
        break;
      }
      case "interface_declaration":
      case "class_declaration":
      case "record_declaration":
      case "enum_declaration": {
        if (info.typeName === null) {
          const name = node.childForFieldName("name");
          if (name) {
            info.typeName = name.text;
            info.isInterface = node.type === "interface_declaration";
          }
        }
        break;
      }
      case "method_declaration": {
        const name = node.childForFieldName("name");
        const parameters = node.childForFieldName("parameters");
        if (name && parameters) {
          info.methods.set(name.text, { name: name.text, params: collectParams(parameters) });
        }
        break;
      }
      case "field_declaration": {
        const typeNode = node.childForFieldName("type");
        const declarator = node.childForFieldName("declarator");
        const nameNode = declarator?.childForFieldName("name");
        if (typeNode && nameNode) {
          info.fields.set(nameNode.text, simplifyType(typeNode) ?? nameNode.text);
        }
        break;
      }
    }
    for (let i = 0; i < node.namedChildCount; i++) {
      const child = node.namedChild(i);
      if (child) {
        visit(child);
      }
    }
  };
  visit(tree.rootNode);
  return info;
}

export interface JavaMethodTarget {
  fqn: string;
  interfaceName: string;
  methodName: string;
  resultType: string | null;
}

export function javaMethodTarget(
  tree: Tree,
  line: number,
  character: number,
): JavaMethodTarget | null {
  const node = tree.rootNode.descendantForPosition({ row: line, column: character });
  let method: Node | null = null;
  let iface: Node | null = null;
  let current: Node | null = node;
  while (current) {
    if (current.type === "method_declaration" && !method) {
      method = current;
    } else if (current.type === "interface_declaration") {
      iface = current;
      break;
    }
    current = current.parent;
  }
  if (!method || !iface) {
    return null;
  }
  const methodName = method.childForFieldName("name");
  const interfaceName = iface.childForFieldName("name");
  if (!methodName || !interfaceName) {
    return null;
  }
  const resultType = method.childForFieldName("type");
  const simplified = resultType ? simplifyType(resultType) : null;
  return {
    fqn: `${javaPackageName(tree)}.${interfaceName.text}`,
    interfaceName: interfaceName.text,
    methodName: methodName.text,
    resultType: simplified ? qualifyTypeName(simplified, tree) : null,
  };
}

function javaPackageName(tree: Tree): string {
  for (let i = 0; i < tree.rootNode.namedChildCount; i++) {
    const child = tree.rootNode.namedChild(i);
    if (child && child.type === "package_declaration") {
      for (let j = 0; j < child.namedChildCount; j++) {
        const part = child.namedChild(j);
        if (part && part.type === "scoped_identifier") {
          return part.text;
        }
      }
    }
  }
  return "";
}

const BUILTIN_TYPES = new Set([
  "void",
  "boolean",
  "byte",
  "short",
  "int",
  "long",
  "float",
  "double",
  "char",
  "Boolean",
  "Byte",
  "Short",
  "Integer",
  "Long",
  "Float",
  "Double",
  "Character",
  "String",
  "Object",
]);

function qualifyTypeName(name: string, tree: Tree): string {
  if (BUILTIN_TYPES.has(name) || name.includes(".")) {
    return name;
  }
  for (let i = 0; i < tree.rootNode.namedChildCount; i++) {
    const child = tree.rootNode.namedChild(i);
    if (child?.type !== "import_declaration") {
      continue;
    }
    const imported = child.text.match(/^import\s+(?:static\s+)?([\w.]+?)\s*;/)?.[1];
    if (imported && imported.endsWith(`.${name}`)) {
      return imported;
    }
  }
  const pkg = javaPackageName(tree);
  return pkg ? `${pkg}.${name}` : name;
}

export interface SourcePosition {
  row: number;
  column: number;
}

function namePosition(declaration: Node, field: string): SourcePosition | null {
  const name = declaration.childForFieldName(field);
  if (!name) {
    return null;
  }
  return { row: name.startPosition.row, column: name.startPosition.column };
}

const TYPE_DECLARATIONS = [
  "class_declaration",
  "interface_declaration",
  "enum_declaration",
  "record_declaration",
];

export function javaTypePosition(tree: Tree): SourcePosition | null {
  for (const node of walkNamed(tree.rootNode)) {
    if (TYPE_DECLARATIONS.includes(node.type)) {
      return namePosition(node, "name");
    }
  }
  return null;
}

export function javaMethodPosition(tree: Tree, method: string): SourcePosition | null {
  for (const node of walkNamed(tree.rootNode)) {
    if (node.type === "method_declaration" && node.childForFieldName("name")?.text === method) {
      return namePosition(node, "name");
    }
  }
  return null;
}

export function javaFieldPosition(tree: Tree, field: string): SourcePosition | null {
  for (const node of walkNamed(tree.rootNode)) {
    if (node.type !== "field_declaration") {
      continue;
    }
    const declarator = node.childForFieldName("declarator");
    const name = declarator?.childForFieldName("name");
    if (name?.text === field) {
      return { row: name.startPosition.row, column: name.startPosition.column };
    }
  }
  return null;
}

export function javaFieldType(tree: Tree, field: string): string | null {
  for (const node of walkNamed(tree.rootNode)) {
    if (node.type !== "field_declaration") {
      continue;
    }
    const declarator = node.childForFieldName("declarator");
    if (declarator?.childForFieldName("name")?.text === field) {
      const typeNode = node.childForFieldName("type");
      return typeNode ? simplifyType(typeNode) : null;
    }
  }
  return null;
}

export function javaParamPosition(
  tree: Tree,
  method: string,
  param: string,
): SourcePosition | null {
  for (const node of walkNamed(tree.rootNode)) {
    if (node.type !== "method_declaration" || node.childForFieldName("name")?.text !== method) {
      continue;
    }
    const parameters = node.childForFieldName("parameters");
    if (!parameters) {
      return null;
    }
    for (let i = 0; i < parameters.namedChildCount; i++) {
      const child = parameters.namedChild(i);
      if (!child || child.type !== "formal_parameter") {
        continue;
      }
      const nameNode = child.childForFieldName("name");
      const annotation = child.text.match(/@Param\s*\(\s*"([^"]+)"\s*\)/)?.[1];
      if (nameNode && (nameNode.text === param || annotation === param)) {
        return { row: nameNode.startPosition.row, column: nameNode.startPosition.column };
      }
    }
  }
  return null;
}

export function xmlElementPosition(tree: Tree, tag: string, id?: string): SourcePosition | null {
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node) || elementName(node) !== tag) {
      continue;
    }
    if (id !== undefined && attributeOf(node, "id")?.value !== id) {
      continue;
    }
    const stag = startTagNode(node);
    const name = stag?.namedChild(0);
    if (name && name.type === "Name") {
      return { row: name.startPosition.row, column: name.startPosition.column };
    }
    return { row: node.startPosition.row, column: node.startPosition.column };
  }
  return null;
}

import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import * as path from "node:path";
import type { Tree } from "web-tree-sitter";
import { parseJava, parseXml } from "./tree.mjs";
import { parseJavaFile, type JavaFile, type MethodInfo } from "./tree.mjs";
import {
  PROPERTY_TAGS,
  ROOT_TAGS,
  STATEMENT_TAGS,
  attributeOf,
  elementName,
  isElementNode,
  walkNamed,
} from "./tree.mjs";

export interface ServerOptions {
  mapper_glob: string;
  classpaths: string[];
}

export const defaultOptions: ServerOptions = {
  mapper_glob: "**/*[Mm]apper*",
  classpaths: ["src/main"],
};

export function readOptions(raw: unknown): ServerOptions {
  const source = (raw ?? {}) as Partial<ServerOptions>;
  return {
    mapper_glob:
      typeof source.mapper_glob === "string" ? source.mapper_glob : defaultOptions.mapper_glob,
    classpaths: Array.isArray(source.classpaths)
      ? source.classpaths.filter((c): c is string => typeof c === "string")
      : defaultOptions.classpaths,
  };
}

export function globToRegExp(glob: string): RegExp {
  let re = "^";
  let i = 0;
  while (i < glob.length) {
    const c = glob[i];
    if (c === "*") {
      if (glob[i + 1] === "*") {
        let j = i + 2;
        while (glob[j] === "/") {
          j++;
        }
        re += "(?:.*/)?";
        i = j;
      } else {
        re += "[^/]*";
        i++;
      }
    } else if (c === "?") {
      re += "[^/]";
      i++;
    } else if (c === "[") {
      const end = glob.indexOf("]", i);
      if (end === -1) {
        re += "\\[";
        i++;
      } else {
        re += "[" + glob.slice(i + 1, end) + "]";
        i = end + 1;
      }
    } else {
      re += c.replace(/[.+^${}()|[\]\\]/g, "\\$&");
      i++;
    }
  }
  return new RegExp(re + "$");
}

export const javaBuiltinTypes: { simple: string; full: string }[] = [
  { simple: "Object", full: "java.lang.Object" },
  { simple: "String", full: "java.lang.String" },
  { simple: "Character", full: "java.lang.Character" },
  { simple: "Boolean", full: "java.lang.Boolean" },
  { simple: "Byte", full: "java.lang.Byte" },
  { simple: "Short", full: "java.lang.Short" },
  { simple: "Integer", full: "java.lang.Integer" },
  { simple: "Long", full: "java.lang.Long" },
  { simple: "Float", full: "java.lang.Float" },
  { simple: "Double", full: "java.lang.Double" },
  { simple: "BigDecimal", full: "java.math.BigDecimal" },
  { simple: "BigInteger", full: "java.math.BigInteger" },
  { simple: "Date", full: "java.util.Date" },
  { simple: "List", full: "java.util.List" },
  { simple: "Map", full: "java.util.Map" },
  { simple: "Set", full: "java.util.Set" },
  { simple: "LocalDate", full: "java.time.LocalDate" },
  { simple: "LocalTime", full: "java.time.LocalTime" },
  { simple: "LocalDateTime", full: "java.time.LocalDateTime" },
  { simple: "byte", full: "byte" },
  { simple: "short", full: "short" },
  { simple: "int", full: "int" },
  { simple: "long", full: "long" },
  { simple: "float", full: "float" },
  { simple: "double", full: "double" },
  { simple: "boolean", full: "boolean" },
  { simple: "char", full: "char" },
];

const ROOT_FILES = ["pom.xml", "build.gradle", "build.gradle.kts"];
const SKIP_DIRS = new Set(["target", "build"]);

export interface ProjectFiles {
  root: string;
  javaFiles: string[];
  xmlFiles: string[];
}

export function findProjectRoot(startDir: string): string | null {
  const moduleRoot = findModuleRoot(startDir);
  if (!moduleRoot) {
    return null;
  }
  let root = moduleRoot;
  let dir = path.dirname(moduleRoot);
  for (;;) {
    if (hasRootFile(dir)) {
      root = dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      break;
    }
    dir = parent;
  }
  return root;
}

function findModuleRoot(startDir: string): string | null {
  let dir = path.resolve(startDir);
  for (;;) {
    if (hasRootFile(dir)) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      return null;
    }
    dir = parent;
  }
}

function hasRootFile(dir: string): boolean {
  return ROOT_FILES.some((file) => existsSync(path.join(dir, file)));
}

async function sourceRoots(root: string, classpaths: string[]): Promise<string[]> {
  const wanted = new Set(
    classpaths.flatMap((classpath) =>
      [`${classpath}/java`, `${classpath}/resources`].map((suffix) => suffix.replace(/\/+$/, "")),
    ),
  );
  const roots: string[] = [];
  const walk = async (dir: string): Promise<void> => {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name.startsWith(".") || SKIP_DIRS.has(entry.name)) {
        continue;
      }
      const full = path.join(dir, entry.name);
      const relative = path.relative(root, full).split(path.sep).join("/");
      if (wanted.has(relative)) {
        roots.push(full);
      }
      await walk(full);
    }
  };
  await walk(root);
  return roots;
}

export async function scanProject(
  root: string,
  mapperRe: RegExp,
  classpaths: string[],
): Promise<ProjectFiles> {
  const javaFiles: string[] = [];
  const xmlFiles: string[] = [];
  const collect = async (dir: string, isResources: boolean): Promise<void> => {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!entry.name.startsWith(".") && !SKIP_DIRS.has(entry.name)) {
          await collect(full, isResources);
        }
      } else if (isResources) {
        if (entry.name.endsWith(".xml") && mapperRe.test(entry.name)) {
          xmlFiles.push(full);
        }
      } else if (entry.name.endsWith(".java")) {
        javaFiles.push(full);
      }
    }
  };
  for (const sourceRoot of await sourceRoots(root, classpaths)) {
    await collect(sourceRoot, path.basename(sourceRoot) === "resources");
  }
  return { root, javaFiles, xmlFiles };
}

export interface StatementInfo {
  id: string;
  parameterType?: string;
  resultMapId?: string;
}

export interface ResultMapInfo {
  id: string;
  type?: string;
  properties: Map<string, number>;
}

export interface XmlMapper {
  path: string;
  namespace: string;
  statements: Map<string, StatementInfo>;
  resultMaps: Map<string, ResultMapInfo>;
  sqlIds: Set<string>;
}

export interface JavaEntry {
  path: string;
  fqn: string;
  name: string;
  info: JavaFile;
}

function collectXml(tree: Tree, path: string): XmlMapper {
  const mapper: XmlMapper = {
    path,
    namespace: "",
    statements: new Map(),
    resultMaps: new Map(),
    sqlIds: new Set(),
  };
  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node)) {
      continue;
    }
    const name = elementName(node);
    if (!name) {
      continue;
    }
    if (ROOT_TAGS.includes(name)) {
      mapper.namespace = attributeOf(node, "namespace")?.value ?? mapper.namespace;
    } else if (name === "sql") {
      const id = attributeOf(node, "id")?.value;
      if (id) {
        mapper.sqlIds.add(id);
      }
    } else if (name === "resultMap") {
      const id = attributeOf(node, "id")?.value;
      if (!id) {
        continue;
      }
      const info: ResultMapInfo = {
        id,
        type: attributeOf(node, "type")?.value,
        properties: new Map(),
      };
      for (const child of walkNamed(node)) {
        if (child === node || !isElementNode(child)) {
          continue;
        }
        const childName = elementName(child);
        if (childName && PROPERTY_TAGS.includes(childName)) {
          const property = attributeOf(child, "property")?.value;
          if (property) {
            info.properties.set(property, child.startPosition.row);
          }
        }
      }
      mapper.resultMaps.set(id, info);
    } else if (STATEMENT_TAGS.includes(name)) {
      const id = attributeOf(node, "id")?.value;
      if (id) {
        mapper.statements.set(id, {
          id,
          parameterType: attributeOf(node, "parameterType")?.value,
          resultMapId: attributeOf(node, "resultMap")?.value,
        });
      }
    }
  }
  return mapper;
}

export class BindingIndex {
  readonly xmlByPath = new Map<string, XmlMapper>();
  private readonly javaByPath = new Map<string, JavaEntry>();
  private readonly javaByFqn = new Map<string, JavaEntry>();
  private readonly simpleToFqns = new Map<string, string[]>();

  async refreshXml(path: string, content?: string): Promise<void> {
    const text = content ?? (await readFile(path, "utf8"));
    const tree = await parseXml(text);
    if (!tree) {
      return;
    }
    const mapper = collectXml(tree, path);
    tree.delete();
    if (mapper.namespace) {
      this.xmlByPath.set(path, mapper);
    } else {
      this.xmlByPath.delete(path);
    }
  }

  async refreshJava(path: string, content?: string): Promise<void> {
    const text = content ?? (await readFile(path, "utf8"));
    this.removeJava(path);
    const tree = await parseJava(text);
    if (!tree) {
      return;
    }
    const info = parseJavaFile(tree);
    tree.delete();
    if (!info.typeName) {
      return;
    }
    const fqn = info.packageName ? `${info.packageName}.${info.typeName}` : info.typeName;
    const entry: JavaEntry = { path, fqn, name: info.typeName, info };
    this.javaByPath.set(path, entry);
    this.javaByFqn.set(fqn, entry);
    const fqns = this.simpleToFqns.get(info.typeName) ?? [];
    fqns.push(fqn);
    this.simpleToFqns.set(info.typeName, fqns);
  }

  deleteFile(path: string): void {
    this.xmlByPath.delete(path);
    this.removeJava(path);
  }

  private removeJava(path: string): void {
    const entry = this.javaByPath.get(path);
    if (!entry) {
      return;
    }
    this.javaByPath.delete(path);
    if (this.javaByFqn.get(entry.fqn) === entry) {
      this.javaByFqn.delete(entry.fqn);
    }
    const fqns = this.simpleToFqns.get(entry.name);
    if (fqns) {
      const i = fqns.indexOf(entry.fqn);
      if (i >= 0) {
        fqns.splice(i, 1);
      }
      if (fqns.length === 0) {
        this.simpleToFqns.delete(entry.name);
      }
    }
  }

  allJava(): JavaEntry[] {
    return [...this.javaByPath.values()];
  }

  resolveClass(simpleOrFqn: string): JavaEntry | null {
    const exact = this.javaByFqn.get(simpleOrFqn);
    if (exact) {
      return exact;
    }
    const fqns = this.simpleToFqns.get(simpleOrFqn);
    if (!fqns || fqns.length !== 1) {
      return null;
    }
    return this.javaByFqn.get(fqns[0]) ?? null;
  }

  mapperMethods(fqn: string): MethodInfo[] | null {
    const entry = this.javaByFqn.get(fqn);
    if (!entry || !entry.info.isInterface) {
      return null;
    }
    return [...entry.info.methods.values()];
  }

  xmlForNamespace(namespace: string): XmlMapper | null {
    for (const mapper of this.xmlByPath.values()) {
      if (mapper.namespace === namespace) {
        return mapper;
      }
    }
    return null;
  }
}

export interface ResolvedParam {
  type: string;
  label: string;
}

function walkEntity(index: BindingIndex, type: string, segments: string[]): ResolvedParam | null {
  let currentType = type;
  let last = segments[0];
  for (const segment of segments) {
    const entity = index.resolveClass(currentType);
    if (!entity) {
      return null;
    }
    const fieldType = entity.info.fields.get(segment);
    if (!fieldType) {
      return null;
    }
    currentType = fieldType;
    last = segment;
  }
  return { type: currentType, label: `${currentType} ${last}` };
}

export function resolveParamPath(
  index: BindingIndex,
  methods: MethodInfo[] | null,
  parameterType: string | undefined,
  path: string,
): ResolvedParam | null {
  const segments = path.split(".").filter((s) => s.length > 0);
  if (segments.length === 0) {
    return null;
  }
  if (methods) {
    for (const method of methods) {
      for (const param of method.params) {
        if (param.name === segments[0] || param.annotation === segments[0]) {
          if (segments.length === 1) {
            return {
              type: param.type ?? "",
              label: param.type ? `${param.type} ${param.name}` : param.name,
            };
          }
          const viaParam = param.type ? walkEntity(index, param.type, segments.slice(1)) : null;
          if (viaParam) {
            return viaParam;
          }
          return parameterType ? walkEntity(index, parameterType, segments.slice(1)) : null;
        }
      }
    }
    if (methods.length === 1 && methods[0].params.length === 1 && methods[0].params[0].type) {
      const resolved = walkEntity(index, methods[0].params[0].type, segments);
      if (resolved) {
        return resolved;
      }
    }
  }
  if (parameterType) {
    return walkEntity(index, parameterType, segments);
  }
  return null;
}

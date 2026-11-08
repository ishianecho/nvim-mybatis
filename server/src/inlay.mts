import type { InlayHint } from "vscode-languageserver";
import type { BindingIndex } from "./project.mjs";
import { resolveParamPath } from "./project.mjs";
import type { MethodInfo } from "./tree.mjs";
import { parseXml } from "./tree.mjs";
import {
  STATEMENT_TAGS,
  attributeOf,
  elementName,
  enclosingNamespace,
  enclosingStatement,
  isElementNode,
  startTagNode,
  walkNamed,
} from "./tree.mjs";

function boundMethods(
  index: BindingIndex,
  namespace: string | null,
  statementId: string | undefined,
): MethodInfo[] | null {
  if (!namespace) {
    return null;
  }
  const methods = index.mapperMethods(namespace);
  if (!methods) {
    return null;
  }
  if (statementId) {
    const match = methods.filter((m) => m.name === statementId);
    if (match.length > 0) {
      return match;
    }
  }
  return methods;
}

function signature(method: MethodInfo): string {
  const params = method.params
    .map((param) => [param.type, param.annotation ?? param.name].filter(Boolean).join(" "))
    .join(", ");
  return `${method.name}(${params})`;
}

export async function inlayHints(
  text: string,
  startRow: number,
  endRow: number,
  index: BindingIndex,
): Promise<InlayHint[]> {
  const lines = text.split("\n");
  const tree = await parseXml(text);
  if (!tree) {
    return [];
  }
  const hints: InlayHint[] = [];

  for (const node of walkNamed(tree.rootNode)) {
    if (!isElementNode(node)) {
      continue;
    }
    const name = elementName(node);
    if (!name || !STATEMENT_TAGS.includes(name)) {
      continue;
    }
    const id = attributeOf(node, "id")?.value;
    if (!id) {
      continue;
    }
    const tag = startTagNode(node);
    const row = tag ? tag.endPosition.row : node.startPosition.row;
    if (row < startRow || row > endRow) {
      continue;
    }
    const namespace = enclosingNamespace(node);
    const methods = boundMethods(index, namespace, id);
    if (!methods) {
      continue;
    }
    const match = methods.find((m) => m.name === id);
    if (!match) {
      continue;
    }
    const column = lines[row]?.length ?? 0;
    hints.push({
      position: { line: row, character: column },
      label: ` ${signature(match)}`,
      paddingLeft: true,
    });
  }

  const parameterRe = /[#$]\{([^}]*)\}/g;
  for (let row = startRow; row <= endRow && row < lines.length; row++) {
    for (const match of lines[row].matchAll(parameterRe)) {
      const parameter = match[1];
      if (!parameter) {
        continue;
      }
      const column = (match.index ?? 0) + match[0].length;
      const node =
        tree.rootNode.descendantForPosition({ row, column: column - 1 }) ?? tree.rootNode;
      const statement = enclosingStatement(node);
      if (!statement) {
        continue;
      }
      const methods = boundMethods(
        index,
        enclosingNamespace(node),
        attributeOf(statement, "id")?.value,
      );
      const resolved = resolveParamPath(
        index,
        methods,
        attributeOf(statement, "parameterType")?.value,
        parameter,
      );
      if (!resolved || !resolved.type) {
        continue;
      }
      hints.push({
        position: { line: row, character: (match.index ?? 0) + 2 },
        label: resolved.type,
        paddingRight: true,
      });
    }
  }

  tree.delete();
  return hints;
}

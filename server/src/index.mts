import {
  DidChangeWatchedFilesNotification,
  FileChangeType,
  ProposedFeatures,
  TextDocumentSyncKind,
  TextDocuments,
  createConnection,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { URI } from "vscode-uri";
import * as path from "node:path";
import {
  readOptions,
  type ServerOptions,
  globToRegExp,
  BindingIndex,
  findProjectRoot,
  scanProject,
} from "./project.mjs";
import { initParsers, parseJava, javaMethodTarget } from "./tree.mjs";
import { completeAt } from "./completion.mjs";
import { inlayHints } from "./inlay.mjs";
import { definitionAt } from "./definition.mjs";

const connection = createConnection(ProposedFeatures.all, process.stdin, process.stdout);
const documents = new TextDocuments(TextDocument);

let options: ServerOptions = readOptions(undefined);
let mapperRe = globToRegExp(options.mapper_glob);
let projectRoot: string | null = null;
const index = new BindingIndex();
let queue: Promise<void> = Promise.resolve();

function enqueue(task: () => Promise<void>): Promise<void> {
  queue = queue.then(task).catch((error) => {
    connection.console.error(`${error}`);
  });
  return queue;
}

function docPath(uri: string): string {
  return URI.parse(uri).fsPath;
}

function isMapperXml(uri: string): boolean {
  const file = docPath(uri);
  return file.endsWith(".xml") && mapperRe.test(path.basename(file));
}

function root(): string {
  projectRoot ??= findProjectRoot(process.cwd()) ?? process.cwd();
  return projectRoot;
}

function rebuild(): Promise<void> {
  return enqueue(async () => {
    await initParsers();
    const files = await scanProject(root(), mapperRe, options.classpaths);
    connection.console.info(
      `indexing ${files.javaFiles.length} java files, ${files.xmlFiles.length} mapper files`,
    );
    for (const file of files.xmlFiles) {
      await index.refreshXml(file);
    }
    for (const file of files.javaFiles) {
      await index.refreshJava(file);
    }
  });
}

connection.onInitialize((params) => {
  options = readOptions(params.initializationOptions);
  mapperRe = globToRegExp(options.mapper_glob);
  projectRoot = params.rootUri ? URI.parse(params.rootUri).fsPath : null;
  return {
    capabilities: {
      textDocumentSync: {
        openClose: true,
        change: TextDocumentSyncKind.Full,
      },
      completionProvider: {
        triggerCharacters: ["<", ".", '"', "{"],
      },
      definitionProvider: true,
      codeActionProvider: true,
      inlayHintProvider: true,
    },
  };
});

connection.onInitialized(async () => {
  await rebuild();
  await connection.client.register(DidChangeWatchedFilesNotification.type, {
    watchers: [{ globPattern: "**/*.{java,xml}" }],
  });
});

documents.onDidChangeContent((event) => {
  const file = docPath(event.document.uri);
  const text = event.document.getText();
  if (file.endsWith(".java")) {
    void enqueue(() => index.refreshJava(file, text));
  } else if (mapperRe.test(path.basename(file))) {
    void enqueue(() => index.refreshXml(file, text));
  }
});

connection.onDidChangeWatchedFiles((params) => {
  void enqueue(async () => {
    for (const change of params.changes) {
      const file = docPath(change.uri);
      if (!file.endsWith(".java") && !file.endsWith(".xml")) {
        continue;
      }
      if (change.type === FileChangeType.Deleted) {
        index.deleteFile(file);
      } else if (file.endsWith(".java")) {
        await index.refreshJava(file);
      } else {
        await index.refreshXml(file);
      }
    }
  });
});

connection.onCompletion(async (params) => {
  const document = documents.get(params.textDocument.uri);
  if (!document || !isMapperXml(document.uri)) {
    return [];
  }
  return completeAt(document.getText(), params.position.line, params.position.character, index);
});

connection.languages.inlayHint.on((params) => {
  const document = documents.get(params.textDocument.uri);
  if (!document || !isMapperXml(document.uri)) {
    return [];
  }
  return inlayHints(document.getText(), params.range.start.line, params.range.end.line, index);
});

connection.onDefinition(async (params) => {
  const document = documents.get(params.textDocument.uri);
  if (!document) {
    return null;
  }
  return definitionAt(
    docPath(document.uri),
    document.getText(),
    params.position.line,
    params.position.character,
    index,
  );
});

connection.onCodeAction(async (params) => {
  const document = documents.get(params.textDocument.uri);
  if (!document || !docPath(document.uri).endsWith(".java")) {
    return [];
  }
  const tree = await parseJava(document.getText());
  if (!tree) {
    return [];
  }
  const target = javaMethodTarget(tree, params.range.start.line, params.range.start.character);
  tree.delete();
  if (!target || !index.xmlForNamespace(target.fqn)) {
    return [];
  }
  return [
    {
      title: "Generate MyBatis Tag",
      kind: "refactor",
      command: {
        command: "mybatis.generate_crud",
        title: "Generate MyBatis Tag",
        arguments: [
          {
            interface: target.interfaceName,
            method: target.methodName,
            resultType: target.resultType,
          },
        ],
      },
    },
  ];
});

documents.listen(connection);
connection.listen();

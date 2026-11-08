import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

let server;
let buffer = "";
let mapperText;
let javaText;
const pending = new Map();

function send(msg) {
  const body = JSON.stringify(msg);
  server.stdin.write(`Content-Length: ${Buffer.byteLength(body)}\r\n\r\n${body}`);
}

function request(id, method, params) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`timeout waiting for ${method}`)), 15000);
    pending.set(id, (result, error) => {
      clearTimeout(timer);
      error ? reject(new Error(`${method}: ${JSON.stringify(error)}`)) : resolve(result);
    });
    send({ jsonrpc: "2.0", id, method, params });
  });
}

const root = fileURLToPath(new URL("../../tests/fixtures/project/", import.meta.url));
const mapperUrl = new URL(
  "../../tests/fixtures/project/src/main/resources/mapper/UserMapper.xml",
  import.meta.url,
);
const javaUrl = new URL(
  "../../tests/fixtures/project/src/main/java/com/example/mapper/UserMapper.java",
  import.meta.url,
);

before(async () => {
  const [xml, java] = await Promise.all([readFile(mapperUrl, "utf8"), readFile(javaUrl, "utf8")]);
  mapperText = xml;
  javaText = java;
  server = spawn("node", ["dist/mybatis.mjs"], { stdio: ["pipe", "pipe", "inherit"] });
  server.stdout.on("data", (chunk) => {
    buffer += chunk.toString();
    for (;;) {
      const header = buffer.indexOf("\r\n\r\n");
      if (header === -1) return;
      const length = /Content-Length: (\d+)/.exec(buffer.slice(0, header))?.[1];
      if (!length || buffer.length < header + 4 + Number(length)) return;
      const body = buffer.slice(header + 4, header + 4 + Number(length));
      buffer = buffer.slice(header + 4 + Number(length));
      const msg = JSON.parse(body);
      if (msg.id !== undefined && pending.has(msg.id)) {
        pending.get(msg.id)(msg.result, msg.error);
        pending.delete(msg.id);
      }
    }
  });
  const init = await request(1, "initialize", {
    processId: process.pid,
    rootUri: `file://${root}`,
    capabilities: {},
  });
  assert.ok(init.capabilities.completionProvider, "no completionProvider");
  assert.ok(init.capabilities.definitionProvider, "no definitionProvider");
  assert.ok(init.capabilities.codeActionProvider, "no codeActionProvider");
  assert.ok(init.capabilities.inlayHintProvider, "no inlayHintProvider");
  send({ jsonrpc: "2.0", method: "initialized", params: {} });
  send({
    jsonrpc: "2.0",
    method: "textDocument/didOpen",
    params: {
      textDocument: {
        uri: `file://${mapperUrl.pathname}`,
        languageId: "xml",
        version: 1,
        text: xml,
      },
    },
  });
  send({
    jsonrpc: "2.0",
    method: "textDocument/didOpen",
    params: {
      textDocument: {
        uri: `file://${javaUrl.pathname}`,
        languageId: "java",
        version: 1,
        text: java,
      },
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
});

after(async () => {
  try {
    await request(3, "shutdown");
  } catch {}
  send({ jsonrpc: "2.0", method: "exit" });
  await new Promise((resolve) => setTimeout(resolve, 200));
  server.kill();
});

test("completes elements in mapper xml", async () => {
  const items = await request(2, "textDocument/completion", {
    textDocument: { uri: `file://${mapperUrl.pathname}` },
    position: { line: 1, character: 1 },
  });
  assert.ok(Array.isArray(items) && items.length >= 5, `got ${JSON.stringify(items)}`);
});

test("returns no completions in java", async () => {
  const items = await request(4, "textDocument/completion", {
    textDocument: { uri: `file://${javaUrl.pathname}` },
    position: { line: 9, character: 1 },
  });
  assert.equal(Array.isArray(items) ? items.length : 0, 0);
});

test("completes entity fields inside #{} placeholders", async () => {
  const items = await request(10, "textDocument/completion", {
    textDocument: { uri: `file://${mapperUrl.pathname}` },
    position: { line: 22, character: 19 },
  });
  const fields = items?.filter((entry) => entry.kind === 5) ?? [];
  assert.ok(
    fields.some((entry) => entry.label === "username"),
    `fields: ${JSON.stringify(fields.map((entry) => entry.label))}`,
  );
});

test("completes annotated parameter names at the start of #{} placeholders", async () => {
  const items = await request(11, "textDocument/completion", {
    textDocument: { uri: `file://${mapperUrl.pathname}` },
    position: { line: 22, character: mapperText.split("\n")[22].indexOf("#{") + 2 },
  });
  const params = items?.filter((entry) => entry.kind === 5) ?? [];
  assert.ok(
    params.some((entry) => entry.label === "user"),
    `params: ${JSON.stringify(params.map((entry) => entry.label))}`,
  );
});

test("completes entity fields after an annotated parameter prefix", async () => {
  const items = await request(12, "textDocument/completion", {
    textDocument: { uri: `file://${mapperUrl.pathname}` },
    position: { line: 22, character: mapperText.split("\n")[22].indexOf("user.") + 5 },
  });
  const fields = items?.filter((entry) => entry.kind === 5) ?? [];
  assert.ok(
    fields.some((entry) => entry.label === "username"),
    `fields: ${JSON.stringify(fields.map((entry) => entry.label))}`,
  );
});

test("completes nested entity fields two levels deep", async () => {
  const items = await request(13, "textDocument/completion", {
    textDocument: { uri: `file://${mapperUrl.pathname}` },
    position: { line: 22, character: mapperText.split("\n")[22].indexOf("profile.") + 8 },
  });
  const fields = items?.filter((entry) => entry.kind === 5) ?? [];
  assert.ok(
    fields.some((entry) => entry.label === "bio"),
    `fields: ${JSON.stringify(fields.map((entry) => entry.label))}`,
  );
});

test("defines a nested entity field in the target class", async () => {
  const definition = await request(14, "textDocument/definition", {
    textDocument: { uri: `file://${mapperUrl.pathname}` },
    position: { line: 22, character: mapperText.split("\n")[22].indexOf("bio") },
  });
  const target = Array.isArray(definition) ? definition[0] : definition;
  assert.ok(target?.uri.endsWith("Profile.java"), `got ${JSON.stringify(definition)}`);
  assert.equal(target.range.start.line, 5);
});

test("completes fully-qualified class names in type attributes", async () => {
  const items = await request(9, "textDocument/completion", {
    textDocument: { uri: `file://${mapperUrl.pathname}` },
    position: { line: 3, character: 52 },
  });
  const classes = items?.filter((entry) => entry.kind === 7) ?? [];
  assert.ok(
    classes.some((entry) => entry.insertText === "com.example.entity.User"),
    `classes: ${JSON.stringify(classes.map((entry) => entry.insertText))}`,
  );
  assert.ok(
    classes.some((entry) => entry.insertText === "String"),
    `classes: ${JSON.stringify(classes.map((entry) => entry.insertText))}`,
  );
});

test("offers generate_crud code action on a mapper method", async () => {
  const actions = await request(5, "textDocument/codeAction", {
    textDocument: { uri: `file://${javaUrl.pathname}` },
    range: { start: { line: 9, character: 1 }, end: { line: 9, character: 1 } },
    context: { diagnostics: [] },
  });
  assert.ok(Array.isArray(actions) && actions.length === 1, `got ${JSON.stringify(actions)}`);
  assert.equal(actions[0].command?.command, "mybatis.generate_crud");
  assert.deepEqual(actions[0].command?.arguments?.[0], {
    interface: "UserMapper",
    method: "selectUser",
    resultType: "com.example.entity.User",
  });
});

test("defines a mapper method in the xml statement", async () => {
  const definition = await request(6, "textDocument/definition", {
    textDocument: { uri: `file://${javaUrl.pathname}` },
    position: { line: 9, character: javaText.split("\n")[9].indexOf("selectUser") },
  });
  const target = Array.isArray(definition) ? definition[0] : definition;
  assert.ok(target?.uri.endsWith("UserMapper.xml"), `got ${JSON.stringify(definition)}`);
  assert.equal(target.range.start.line, 8);
});

test("defines a mapper parameter in the xml statement", async () => {
  const definition = await request(15, "textDocument/definition", {
    textDocument: { uri: `file://${javaUrl.pathname}` },
    position: { line: 9, character: javaText.split("\n")[9].indexOf("id);") },
  });
  const target = Array.isArray(definition) ? definition[0] : definition;
  assert.ok(target?.uri.endsWith("UserMapper.xml"), `got ${JSON.stringify(definition)}`);
  assert.equal(target.range.start.line, 8);
});

test("passes non-name positions in a mapper method to other clients", async () => {
  const definition = await request(16, "textDocument/definition", {
    textDocument: { uri: `file://${javaUrl.pathname}` },
    position: { line: 9, character: 1 },
  });
  assert.equal(definition, null);
});

test("defines a resultMap type in the entity class", async () => {
  const definition = await request(7, "textDocument/definition", {
    textDocument: { uri: `file://${mapperUrl.pathname}` },
    position: { line: 3, character: 52 },
  });
  const target = Array.isArray(definition) ? definition[0] : definition;
  assert.ok(target?.uri.endsWith("User.java"), `got ${JSON.stringify(definition)}`);
  assert.equal(target.range.start.line, 2);
});

test("shows signature and parameter inlay hints", async () => {
  const hints = await request(8, "textDocument/inlayHint", {
    textDocument: { uri: `file://${mapperUrl.pathname}` },
    range: {
      start: { line: 0, character: 0 },
      end: { line: mapperText.split("\n").length, character: 0 },
    },
  });
  const mapperLines = mapperText.split("\n");
  const signatureHint = hints?.find(
    (hint) => hint.position.line === 8 && hint.position.character === mapperLines[8].length,
  );
  assert.ok(signatureHint, `hints: ${JSON.stringify(hints)}`);
  assert.equal(signatureHint.label, " selectUser(Long id)");
  const paramHint = hints?.find(
    (hint) =>
      hint.position.line === 12 && hint.position.character === mapperLines[12].indexOf("#{") + 2,
  );
  assert.ok(paramHint, `hints: ${JSON.stringify(hints)}`);
  assert.equal(paramHint.label, "Long");
  const prefixedHint = hints?.find(
    (hint) =>
      hint.position.line === 22 && hint.position.character === mapperLines[22].indexOf("#{") + 2,
  );
  assert.ok(prefixedHint, `hints: ${JSON.stringify(hints)}`);
  assert.equal(prefixedHint.label, "String");
  const nestedHint = hints?.find(
    (hint) =>
      hint.position.line === 22 &&
      hint.position.character === mapperLines[22].indexOf("#{user.profile") + 2,
  );
  assert.ok(nestedHint, `hints: ${JSON.stringify(hints)}`);
  assert.equal(nestedHint.label, "String");
});

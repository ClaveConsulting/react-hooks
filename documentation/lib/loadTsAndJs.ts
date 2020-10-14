import { promises as fs } from "fs";
import ts from "typescript";

function transpile(tsSource: string) {
  return ts.transpileModule(tsSource, {
    compilerOptions: {
      module: ts.ModuleKind.ES2015,
      jsx: ts.JsxEmit.Preserve,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
}

export default async function loadTsAndJs(path: string) {
  const ts = await fs.readFile(path, "utf-8");

  const js = transpile(ts);

  return { ts, js };
}

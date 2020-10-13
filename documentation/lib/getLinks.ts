import { promises as fs } from "fs";
import toPrettyName from "./toPrettyName";

export default async function getLinks(path: string) {
  var hooks = await fs.readdir(path);

  return hooks.map((path) => ({
    name: toPrettyName(path),
    path,
  }));
}

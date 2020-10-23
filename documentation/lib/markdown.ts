import { promises as fs } from "fs";
import remark from "remark";
import html from "remark-html";
import prism from "remark-prism";

export default async function markdown(path: string) {
  const content = await fs.readFile(path, "utf-8").catch(() => '');
  const processedContent = await remark()
    .use(prism, {
      plugins: ["prismjs/plugins/line-numbers/prism-line-numbers"],
    })
    .use(html)
    .process(content);
  return processedContent.toString();
}

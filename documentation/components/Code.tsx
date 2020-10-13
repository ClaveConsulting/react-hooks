import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Code({
  language,
  children,
}: {
  language: string;
  children: string;
}) {
  return (
    <>
      <SyntaxHighlighter
        style={vscDarkPlus}
        useInlineStyles
        customStyle={{ margin: "0" }}
        language={language}
        showLineNumbers
      >
        {children}
      </SyntaxHighlighter>
    </>
  );
}

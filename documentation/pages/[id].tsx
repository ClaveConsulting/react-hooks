import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { loadTsAndJs } from "../build";
import Code from "../components/Code";
import Cols from "../components/Cols";
import Layout from "../components/Layout";
import Tabs, { Tab } from "../components/Tabs";
import getLinks from "../lib/getLinks";
import markdown from "../lib/markdown";
import toPrettyName from "../lib/toPrettyName";

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  var links = await getLinks("../hooks");
  return {
    paths: links.map((p) => ({ params: { id: p.path } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params: { id },
}) => {
  const props = {
    id,
    name: toPrettyName(id),
    demo: await loadTsAndJs(`../hooks/${id}/demo/index.tsx`),
    source: await loadTsAndJs(`../hooks/${id}/ts/index.ts`),
    links: await getLinks("../hooks"),
    readme: await markdown(`../hooks/${id}/README.md`),
  };

  return {
    props,
  };
};

export interface Props {
  id: string;
  name: string;
  readme: string;
  demo: {
    ts: string;
    js: string;
  };
  source: {
    ts: string;
    js: string;
  };
  links: {
    name: string;
    path: string;
  }[];
}

export default function Index({
  id,
  name,
  readme,
  demo,
  source,
  links,
}: Props) {
  const Demo = dynamic(() => import(`../../hooks/${id}/demo/index.tsx`));

  return (
    <Layout links={links}>
      <Head>
        <title>{name}</title>
      </Head>

      <p></p>

      <Tabs>
        <Tab name="Readme" theme="white">
          <div
            style={{ padding: "1em" }}
            dangerouslySetInnerHTML={{ __html: readme }}
          />
        </Tab>
        <Tab name="Demo" theme="white">
          <Cols>
            <Demo />
            <Tabs>
              <Tab name="TypeScript">
                <Code language="tsx">{demo.ts}</Code>
              </Tab>
              <Tab name="JavaScript">
                <Code language="jsx">{demo.js}</Code>
              </Tab>
            </Tabs>
          </Cols>
        </Tab>
        <Tab name="Source" theme="white">
          <p style={{ margin: "1em" }}>
            You can find the{" "}
            <a
              href={`https://github.com/ClaveConsulting/react-hooks/tree/master/hooks/${id}`}
            >
              source code on github
            </a>{" "}
            or you can copy it below
          </p>
          <Tabs>
            <Tab name="TypeScript">
              <Code language="tsx">{source.ts}</Code>
            </Tab>
            <Tab name="JavaScript">
              <Code language="jsx">{source.js}</Code>
            </Tab>
          </Tabs>
        </Tab>
      </Tabs>
    </Layout>
  );
}

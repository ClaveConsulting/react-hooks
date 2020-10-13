import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { loadTsAndJs } from "../../build";
import Code from "../../components/Code";
import Cols from "../../components/Cols";
import Layout from "../../components/Layout";
import Tabs, { Tab } from "../../components/Tabs";
import Demo from "./Demo";
import style from "./style.module.css";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const props = {
    demo: await loadTsAndJs("./pages/use-array-state/Demo.tsx"),
    source: await loadTsAndJs("../hooks/use-array-state/ts/index.ts"),
  };

  return {
    props,
  };
};

export interface Props {
  demo: {
    ts: string;
    js: string;
  };
  source: {
    ts: string;
    js: string;
  };
}

export default function Index({ demo, source }: Props) {
  return (
    <Layout>
      <Head>
        <title>useArrayState</title>
      </Head>

      <h1>useArrayState</h1>

      <p>
        <code>useArrayState</code> is similar to <code>useState</code>, but with
        added functionality for manipulating arrays. It returns the same{" "}
        <code>[state, setState]</code> pair as <code>useState</code>, but there
        are additional methods available on <code>setState</code>. For example,
        to insert a new element an the end of the array, call{" "}
        <code>setState.append('value')</code> and to remove the first element
        call <code>setState.removeAt(0)</code>.
      </p>

      <a href="https://github.com/ClaveConsulting/react-hooks/tree/master/hooks/use-array-state">
        Source code
      </a>

      <p></p>

      <Code language="shell">{`npm install @clave/use-array-state`}</Code>

      <p></p>

      <Tabs>
        <Tab name="Demo" className="white">
          <Cols>
            <div className={style.demo}>
              <Demo />
            </div>
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
        <Tab name="Source (TS)">
          <Code language="tsx">{source.ts}</Code>
        </Tab>
        <Tab name="Source (JS)">
          <Code language="jsx">{source.js}</Code>
        </Tab>
      </Tabs>
    </Layout>
  );
}
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
    demo: await loadTsAndJs("./pages/use-boolean-state/Demo.tsx"),
    source: await loadTsAndJs("../hooks/use-boolean-state/ts/index.ts"),
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
        <title>useBooleanState</title>
      </Head>
      <h1>useBooleanState</h1>
      <p>
        <code>useArrayBoolean</code> is similar to <code>useState</code>, but
        with added functionality for manipulating boolean values. It returns the
        same <code>[state, setState]</code> pair as <code>useState</code>, but
        there are three additional methods available on <code>setState</code>:
      </p>
      <ul>
        <li>
          <code>setState.toFalse()</code> sets the value to false
        </li>
        <li>
          <code>setState.toTrue()</code> sets the value to true
        </li>
        <li>
          <code>setState.toggle()</code> changes the boolean value to the
          opposite
        </li>
      </ul>
      <a href="https://github.com/ClaveConsulting/react-hooks/tree/master/hooks/use-boolean-state">
        Source code
      </a>
      <p></p>
      <Code language="shell">{`npm install @clave/use-boolean-state`}</Code>
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
      </Tabs>{" "}
    </Layout>
  );
}

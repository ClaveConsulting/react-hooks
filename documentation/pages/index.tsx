import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import getLinks from "../lib/getLinks";

export interface Props {
  readonly links: {
    readonly name: string;
    readonly path: string;
  }[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const props = {
    links: await getLinks("../hooks"),
  };

  return {
    props,
  };
};

export default function Home({ links }: Props) {
  return (
    <Layout links={links}>
      <Head>
        <title>use react hooks</title>
      </Head>

      <main>
        <h1>use react hooks</h1>

        <p>Here is a collection of useful react hooks</p>
      </main>
    </Layout>
  );
}

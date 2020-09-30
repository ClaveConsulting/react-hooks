import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>use react hooks</title>
      </Head>

      <main>
        <h1>use react hooks</h1>

        <ul>
          <li>
            <Link href="/use-boolean-state">
              <a>useBooleanState</a>
            </Link>
          </li>
          <li>
            <Link href="/use-array-state">
              <a>useArrayState</a>
            </Link>
          </li>
        </ul>
      </main>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        main {
          max-width: 400px;
          margin: 1em auto;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

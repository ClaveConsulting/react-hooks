import Head from "next/head";
import useBooleanState from "use-boolean-state";

export default function Index() {
  const [isOpen, setOpen] = useBooleanState();

  return (
    <div>
      <Head>
        <title>useBooleanState</title>
      </Head>
      <h1>useBooleanState</h1>

      <a href="https://github.com/ClaveConsulting/react-hooks/tree/master/hooks/use-boolean-state">
        Source code
      </a>

      <h2>Demo</h2>

      <button onClick={setOpen.toggle}>Toggle</button>

      {isOpen ? (
        <div style={{ border: "2px solid darkgreen", background: "#aaffaa" }}>
          <h2>It is open</h2>
          <button onClick={setOpen.toFalse}>Close now</button>
        </div>
      ) : (
        <div style={{ border: "2px solid darkred", background: "#ffaaaa" }}>
          <h2>It is closed</h2>
          <button onClick={setOpen.toTrue}>Open now</button>
        </div>
      )}
    </div>
  );
}

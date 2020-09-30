import Head from "next/head";
import useArrayState from "use-array-state";

interface TodoItem {
  readonly description: string;
  readonly done: boolean;
}

export default function Index() {
  const [items, setItems] = useArrayState<TodoItem>([]);

  return (
    <div>
      <Head>
        <title>useArrayState</title>
      </Head>
      <h1>useArrayState</h1>

      {items.map(({ done, description }, index) => (
        <div>
          <input
            type="checkbox"
            onChange={() =>
              setItems.editAt(index, (old) => ({ ...old, done: !done }))
            }
          />
          <input
            type="text"
            value={description}
            onChange={({ target }) =>
              setItems.replaceAt(index, {
                done,
                description: target.value,
              })
            }
          />
          <button onClick={() => setItems.removeAt(index)}>Remove</button>
          {done ? "Done!" : ""}
        </div>
      ))}

      <button onClick={() => setItems.append({ description: "", done: false })}>
        Add
      </button>
    </div>
  );
}

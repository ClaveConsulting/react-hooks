import { FormEvent, useCallback, useState } from "react";
import useArrayState from "use-array-state";

interface TodoItem {
  readonly description: string;
  readonly done: boolean;
}
export default function Demo() {
  const [items, setItems] = useArrayState<TodoItem>([]);
  const [value, setValue] = useState("");

  const submit = useCallback(
    (e: FormEvent) => {
      setItems.append({ description: value, done: false });
      setValue("");
      e.preventDefault();
    },
    [value]
  );

  return (
    <div>
      <h2>todos</h2>
      <ul>
        {items.map(({ done, description }, index) => (
          <li>
            <input
              type="checkbox"
              onChange={() =>
                setItems.editAt(index, (old) => ({ ...old, done: !done }))
              }
            />
            <span style={{ textDecoration: done ? "line-through" : "none" }}>
              {description}
            </span>
            <button onClick={() => setItems.removeAt(index)}>X</button>
          </li>
        ))}
      </ul>

      <form onSubmit={submit}>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit" disabled={!value}>
          Add
        </button>
      </form>
    </div>
  );
}

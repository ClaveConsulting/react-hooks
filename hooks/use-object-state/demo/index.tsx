import useObjectState from "@clave/use-object-state";
import * as React from "react";
import style from "./style.module.css";

export default function Demo() {
  const [state, setState] = useObjectState({
    active: true,
    secondCheckbox: false,
    number: 0,
    text: "",
  });

  return (
    <div className={style.demo}>
      <label>
        <input
          checked={state.active}
          type="checkbox"
          onChange={(e) => setState.set("active", e.currentTarget.checked)}
        />
        Active
      </label>
      <label>
        <input
          checked={state.secondCheckbox}
          type="checkbox"
          onChange={(e) =>
            setState.set("secondCheckbox", e.currentTarget.checked)
          }
        />
        The second checbox
      </label>
      <label>
        Number and text
        <input
          type="number"
          onChange={(e) =>
            setState.with({
              number: e.currentTarget.valueAsNumber,
              text: e.currentTarget.value,
            })
          }
          value={state.number}
        />
      </label>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

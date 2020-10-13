import * as React from "react";
import useObjectState from "use-object-state";
import style from "./style.module.css";

export default function Demo() {
  const [state, setState] = useObjectState({
    active: true,
    secondCheckbox: false,
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
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

import useDirtyTracking from "@clave/use-dirty-tracking";
import * as React from "react";
import { useCallback, useState } from "react";
import style from "./style.module.css";

export default function Demo() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState(0);
  const [isDirty, resetDirty] = useDirtyTracking(value1, value2);

  const submit = useCallback(() => {
    resetDirty();
  }, []);

  return (
    <div className={style.demo}>
      <label>
        Value1:{" "}
        <input value={value1} onChange={(e) => setValue1(e.target.value)} />
      </label>
      <label>
        Value2:{" "}
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(e.target.valueAsNumber)}
        />
      </label>
      {isDirty ? (
        <strong>You can now save the changes</strong>
      ) : (
        <em>Change one of the values above</em>
      )}
      <button disabled={!isDirty} onClick={submit}>
        Save changes
      </button>
    </div>
  );
}

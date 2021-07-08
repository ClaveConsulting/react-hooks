import useCreateReducer from "@clave/use-create-reducer";
import * as React from "react";
import style from "./style.module.css";

export default function Demo() {
  useCreateReducer();

  return (
    <div className={style.demo}>
    </div>
  );
}

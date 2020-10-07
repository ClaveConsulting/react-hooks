import { PropsWithChildren } from "react";
import style from "./Cols.module.css";

export default function Cols({ children }: PropsWithChildren<any>) {
  return <div className={style.cols}>{children}</div>;
}

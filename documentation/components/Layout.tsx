import React, { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <div id="layout">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

import React, { PropsWithChildren } from "react";
import Sidebar, { Props } from "./Sidebar";

export default function Layout({ children, links }: PropsWithChildren<Props>) {
  return (
    <div id="layout">
      <Sidebar links={links} />
      <main>{children}</main>
    </div>
  );
}

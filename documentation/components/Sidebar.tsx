import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

export default function Sidebar() {
  return (
    <nav>
      <Link href="/">
        <a>
          <h2>Hooks</h2>
        </a>
      </Link>
      <MenuLink href="/use-array-state">
        <a>useArrayState</a>
      </MenuLink>
      <MenuLink href="/use-boolean-state">
        <a>useBooleanState</a>
      </MenuLink>
    </nav>
  );
}

function MenuLink({ href, children }: LinkProps & { children: ReactElement }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}

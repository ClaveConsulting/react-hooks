import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

export interface Props {
  readonly links: {
    readonly name: string;
    readonly path: string;
  }[];
}

export default function Sidebar({ links }: Props) {
  return (
    <nav>
      <Link href="/">
        <a>
          <h2>Hooks</h2>
        </a>
      </Link>
      {links.map(({ name, path }) => (
        <MenuLink key={path} href={`/${path}`}>
          <a>{name}</a>
        </MenuLink>
      ))}
    </nav>
  );
}

function MenuLink({ href, children }: LinkProps & { children: ReactElement }) {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.asPath === href) {
    className = `${className} selected`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
}

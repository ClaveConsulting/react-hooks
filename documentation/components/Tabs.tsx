import cn from "classnames";
import { PropsWithChildren, useState } from "react";
import style from "./Tabs.module.css";

type TabProps = PropsWithChildren<{
  name: string;
  theme?: "white";
}>;

export function Tab({ children }: TabProps) {
  return <>{children}</>;
}

export interface TabsProps {
  children: React.ReactElement<TabProps>[];
  classes?: {
    container?: string;
    tabs?: string;
    tab?: string;
    selected?: string;
  };
}

export default function Tabs({
  children,
  classes: {
    container = style.container,
    tabs = style.tabs,
    tab = style.tab,
    selected = style.selected,
  } = {},
}: TabsProps) {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <div className={tabs}>
        {children.map((child, index) => (
          <button
            key={index}
            className={cn(tab, {
              [selected]: index === current,
              [style.white]: child.props.theme === "white",
            })}
            onClick={() => setCurrent(index)}
          >
            {child.props.name}
          </button>
        ))}
      </div>
      <div className={container}>{children[current]}</div>
    </div>
  );
}

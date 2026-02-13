"use client";
import { HTMLAttributes, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconProps, Icons } from "../icons/IconMap";

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  item?: number;
  items: {
    label: string;
    icon: IconProps["icon"];
    content: React.ReactNode;
    disabled?: boolean;
  }[];
}

export const TabList = (props: TabListProps) => {
  const { items, item, className, children, ...tabListProps } = props;
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (item !== undefined) setTabIndex(item);
  }, [item]);

  const tabOptions = useMemo(() => {
    return items.map((item, index) => {
      const classNames = ["tab tabs-lg text-sm gap-2"];
      if (tabIndex === index) classNames.push("tab-active");
      if (item.disabled) classNames.push("tab-disabled");

      return (
        <a
          key={index}
          role="tab"
          className={classNames.join(" ")}
          onClick={() => setTabIndex(index)}
        >
          {item.icon && <Icons icon={item.icon} size="16" />}
          {item.label}
        </a>
      );
    });
  }, [items, tabIndex]);

  return (
    <div className={twMerge("w-full", className)} {...tabListProps}>
      <div role="tablist" className="tabs flex lg:tabs-lift lg:flex-nowrap">
        {tabOptions}
        <div className="flex-1 border-b" />
      </div>
      <div className="mt-2">{items[tabIndex].content}</div>
    </div>
  );
};

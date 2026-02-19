"use client";
import { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconProps, Icons } from "../icons/IconMap";

export type TabListProps = {
  className?: string;
  defaultItem?: number;
  items: {
    label: string;
    icon: IconProps["icon"];
    content: React.ReactNode;
    disabled?: boolean;
    color?: "main" | "blue" | "red" | "green";
    responsive?: "sm" | "md" | "lg";
    value?: string;
  }[];
  onSelect?: (item: TabListProps["items"][number]) => void;
};

export const TabList = (props: TabListProps) => {
  const { items, defaultItem, className, onSelect, ...tabListProps } = props;
  const [tabIndex, setTabIndex] = useState(defaultItem ?? 0);

  const onSelectItem = (index: number) => {
    setTabIndex(index);
    if (onSelect) onSelect(items[index]);
  };

  useEffect(() => {
    if (defaultItem !== undefined) setTabIndex(defaultItem);
  }, [defaultItem]);

  const tabOptions = useMemo(() => {
    return items.map((item, index) => {
      const classNames = ["tab tabs-lg text-sm gap-2"];
      if (tabIndex === index) classNames.push("tab-active");
      if (item.disabled) classNames.push("tab-disabled");
      if (item.color) classNames.push(`text-${item.color}`);
      if (item.responsive) classNames.push("hidden", `${item.responsive}:flex`);

      return (
        <a
          role="tab"
          key={index}
          className={classNames.join(" ")}
          onClick={() => onSelectItem(index)}
        >
          {item.icon && <Icons icon={item.icon} size="16" />}
          {item.label}
        </a>
      );
    });
  }, [items, tabIndex]);

  return (
    <div className={twMerge("w-full", className)} {...tabListProps}>
      <div role="tablist" className="tabs flex tabs-lift lg:flex-nowrap">
        {tabOptions}
        <div className="flex-1 border-b" />
      </div>
      <div className="mt-2">{items[tabIndex]?.content}</div>
    </div>
  );
};

/* tailwind include
   sm:flex md:flex lg:flex 
*/

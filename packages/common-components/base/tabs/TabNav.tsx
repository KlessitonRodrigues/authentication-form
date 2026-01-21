"use client";
import { HTMLAttributes, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  items: {
    label: string;
    icon: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
  }[];
}

export const TabList = (props: TabListProps) => {
  const { items, className, children, ...tabListProps } = props;
  const [tabIndex, setTabIndex] = useState(0);

  const tabOptions = useMemo(() => {
    return items.map((item, index) => {
      const classNames = ["tab", "text-sm", "gap-2"];
      if (tabIndex === index) classNames.push("tab-active");
      if (item.disabled) classNames.push("tab-disabled");

      return (
        <a
          key={index}
          role="tab"
          className={classNames.join(" ")}
          onClick={() => setTabIndex(index)}
        >
          {item.icon}
          {item.label}
        </a>
      );
    });
  }, [items, tabIndex]);

  return (
    <div className={twMerge("w-full", className)} {...tabListProps}>
      <div role="tablist" className="w-full tabs tabs-lift">
        <div role="tablist" className="tabs tabs-lift">
          {tabOptions}
        </div>
      </div>
      <div className="mt-4">{items[tabIndex].content}</div>
    </div>
  );
};

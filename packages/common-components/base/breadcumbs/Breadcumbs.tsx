import { twMerge } from "tailwind-merge";
import { IconProps, Icons } from "../icons/IconMap";
import { useMemo } from "react";

interface BreadcumbsProps {
  className?: string;
  items?: { label: string; icon?: IconProps["icon"]; href?: string }[];
}

export const Breadcumbs = (props: BreadcumbsProps) => {
  const { className, items } = props;
  const classNames = [
    "breadcrumbs text-sm font-bold bg-bg1 px-4 py-2 shadow-md",
  ];
  classNames.push(className || "");

  const itemList = useMemo(
    () =>
      items?.map((item, index) => (
        <li key={index} className="flex gap-2">
          <Icons icon={item.icon} size="22" />
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <span className="inline-flex items-center gap-2">{item.label}</span>
          )}
        </li>
      )),
    [items],
  );

  return (
    <div className={twMerge(...classNames)}>
      <ul>{itemList}</ul>
    </div>
  );
};

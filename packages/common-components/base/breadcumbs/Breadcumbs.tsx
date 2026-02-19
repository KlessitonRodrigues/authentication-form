import { twMerge } from "tailwind-merge";
import { IconProps, Icons } from "../icons/IconMap";
import { useMemo } from "react";
import Link from "next/link";
import If from "../containers/If";
import { Row } from "../containers/Flex";

export interface BreadcumbsProps {
  className?: string;
  items?: { label: string; icon?: IconProps["icon"]; href?: string }[];
}

export const Breadcumbs = (props: BreadcumbsProps) => {
  const { className, items } = props;
  const classNames = [
    `breadcrumbs text-sm font-bold bg-bg1 px-4 py-2 rounded-md shadow-sm`,
  ];

  const itemList = useMemo(() => {
    return items?.map((item, index) => (
      <li key={index} className="flex gap-2">
        <Icons icon={item.icon} size="22" />
        <If
          condition={!!item.href}
          true={<Link href={item.href || ""}>{item.label}</Link>}
          false={<Row>{item.label}</Row>}
        />
      </li>
    ));
  }, [items]);

  return (
    <div className={twMerge(...classNames, className)}>
      <ul>{itemList}</ul>
    </div>
  );
};

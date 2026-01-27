import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { IconProps, Icons } from "../icons/IconMap";
import { Text } from "../text/Text";

export interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  items?: {
    icon: IconProps["icon"];
    label: string;
    href?: string;
    onClick?: () => void;
  }[];
}

export const Menu = (props: MenuProps) => {
  const { className, items, ...menuProps } = props;
  const classNames = ["menu min-w-40 bg-bg1"];
  classNames.push(className || "");

  return (
    <ul className={twMerge(...classNames)} {...menuProps}>
      {items?.map((item, index) => (
        <li key={index}>
          <a href={item.href} onClick={item.onClick}>
            <Icons icon={item.icon} size="16" className="mr-2" />
            <Text>{item.label}</Text>
          </a>
        </li>
      ))}
    </ul>
  );
};

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { IconProps, Icons } from "../icons/IconMap";
import { Text } from "../text/Text";
import { Column } from "../containers/Flex";
import Link from "next/link";

export interface DescriptionMenuProps extends HTMLAttributes<HTMLUListElement> {
  items?: {
    icon: IconProps["icon"];
    label: string;
    description?: string;
    href?: string;
    active?: boolean;
    onClick?: () => void;
  }[];
}

export const DescriptionMenu = (props: DescriptionMenuProps) => {
  const { className, items, ...menuProps } = props;
  const classNames = ["menu w-full lg:min-w-md min-h-screen bg-bg1"];
  classNames.push(className || "");

  return (
    <ul className={twMerge(...classNames)} {...menuProps}>
      {items?.map((item, index) => {
        const activeItem = item.active
          ? "bg-main text-white"
          : "bg-bg1 text-fg1";
        return (
          <li key={index}>
            <Link href={item.href || ""} onClick={item.onClick}>
              <div className={`border rounded-md p-2 w-10 ${activeItem}`}>
                <Icons icon={item.icon} size="22" />
              </div>
              <Column flexX="start" gap={0}>
                <Text fs="lg" bold className="text-main">
                  {item.label}
                </Text>
                <Text tag="p" fs="sm" fo="70">
                  {item.description}
                </Text>
              </Column>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { IconProps, Icons } from "../icons/IconMap";
import { Text } from "../text/Text";
import { Column } from "../containers/Flex";

export interface DescriptionMenuProps extends HTMLAttributes<HTMLUListElement> {
  items?: {
    icon: IconProps["icon"];
    label: string;
    description?: string;
    href?: string;
    onClick?: () => void;
  }[];
}

export const DescriptionMenu = (props: DescriptionMenuProps) => {
  const { className, items, ...menuProps } = props;
  const classNames = ["menu w-full lg:min-w-md min-h-screen bg-bg1"];
  classNames.push(className || "");

  return (
    <ul className={twMerge(...classNames)} {...menuProps}>
      {items?.map((item, index) => (
        <li key={index}>
          <a href={item.href} onClick={item.onClick}>
            <div className="border rounded-md p-2 w-10 bg-bg3">
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
          </a>
        </li>
      ))}
    </ul>
  );
};

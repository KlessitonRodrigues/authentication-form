import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = (props: CardProps) => {
  const { className, children, ...cardProps } = props;
  const classNames = ["card bg-bg1 shadow-md rounded-sm p-4"];
  classNames.push(className || "");

  return (
    <div className={twMerge(...classNames)} {...cardProps}>
      {children}
    </div>
  );
};

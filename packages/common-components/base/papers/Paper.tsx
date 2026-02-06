import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PaperProps extends HTMLAttributes<HTMLDivElement> {}

export const Paper = (props: PaperProps) => {
  const { className, children, ...paperProps } = props;
  const classNames = ["paper space-y-4 w-full bg-bg1 p-4 shadow-sm"];
  classNames.push(className || "");

  return (
    <div className={twMerge(...classNames)} {...paperProps}>
      {children}
    </div>
  );
};

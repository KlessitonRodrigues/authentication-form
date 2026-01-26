import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PaperProps extends HTMLAttributes<HTMLDivElement> {}

export const Paper = (props: PaperProps) => {
  const { className, children, ...paperProps } = props;
  const classNames = ["paper bg-bg1 shadow-sm p-4"];
  classNames.push(className || "");

  return (
    <div className={twMerge(...classNames)} {...paperProps}>
      {children}
    </div>
  );
};

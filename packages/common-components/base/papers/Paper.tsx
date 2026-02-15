import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PaperProps extends HTMLAttributes<HTMLDivElement> {}

export const Paper = (props: PaperProps) => {
  const { className, children, ...paperProps } = props;
  const classNames = [
    "paper  w-full space-y-4 rounded-md bg-bg1 p-4 shadow-sm slide-up",
  ];

  return (
    <div className={twMerge(...classNames, className)} {...paperProps}>
      {children}
    </div>
  );
};

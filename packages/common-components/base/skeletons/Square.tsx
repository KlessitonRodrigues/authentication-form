import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SquareSkeletonProps extends HTMLAttributes<HTMLDivElement> {
  show?: boolean;
}

export const SquareSkeleton = (props: SquareSkeletonProps) => {
  const { className, show, children, ...skeletonProps } = props;
  const classNames = ["skeleton w-full h-40 rounded-sm"];
  classNames.push(className || "");

  if (!show) return <>{children}</>;

  return <div className={twMerge(...classNames)} {...skeletonProps} />;
};

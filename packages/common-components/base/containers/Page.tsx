"use client";
import { twMerge } from "tailwind-merge";

type IPage = React.HTMLAttributes<HTMLDivElement>;

export const Page = ({ className, ...props }: IPage) => {
  return (
    <div
      {...props}
      className={twMerge(
        `flex flex-col items-center gap-4 max-w-7xl m-auto p-4 lg:p-12 ${className}`
      )}
    />
  );
};

export const PageFull = ({ className, ...props }: IPage) => {
  return (
    <Page
      {...props}
      className={`w-screen h-screen overflow-hidden overflow-y-auto ${className}`}
    />
  );
};

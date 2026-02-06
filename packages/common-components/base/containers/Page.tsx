import { twMerge } from "tailwind-merge";

type IPage = React.HTMLAttributes<HTMLDivElement>;

export const Page = ({ className, ...props }: IPage) => {
  return (
    <div
      {...props}
      className={twMerge(
        `flex flex-col items-center gap-2 pb-20 max-w-350 min-h-screen m-auto ${className}`,
      )}
    />
  );
};

export const PageFull = ({ className, ...props }: IPage) => {
  return (
    <div
      {...props}
      className={twMerge(
        `w-screen h-screen overflow-hidden overflow-y-auto ${className}`,
      )}
    />
  );
};

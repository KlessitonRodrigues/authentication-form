import { twMerge } from "tailwind-merge";

type IHorizontalNav = React.HTMLAttributes<HTMLDivElement>;

export const HorizontalNav = (props: IHorizontalNav) => {
  const { children, className } = props;
  return (
    <div className="w-full lg:max-w-4xl">
      <div className={twMerge("py-2 overflow-x-auto", className)}>
        <div className="flex gap-2 [&>div]:min-w-max">{children}</div>
      </div>
    </div>
  );
};

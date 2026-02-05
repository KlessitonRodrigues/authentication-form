import { twMerge } from "tailwind-merge";

type IChart = React.HTMLAttributes<HTMLDivElement>;

export const Chart = ({ className, ...props }: IChart) => {
  return (
    <div
      {...props}
      className={twMerge(`min-h-120 p-4 border border-default ${className}`)}
    />
  );
};

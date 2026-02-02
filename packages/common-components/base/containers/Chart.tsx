import { twMerge } from "tailwind-merge";

type IChart = React.HTMLAttributes<HTMLDivElement>;

export const Chart = ({ className, ...props }: IChart) => {
  return (
    <div
      {...props}
      className={twMerge(`py-2 pr-2 border border-default ${className}`)}
    />
  );
};

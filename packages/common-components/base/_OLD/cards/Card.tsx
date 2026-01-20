import { twMerge } from "tailwind-merge";

type ICard = React.HTMLAttributes<HTMLDivElement> & {
  selected?: boolean;
};

export const Card = ({ className, ...props }: ICard) => {
  return (
    <div
      {...props}
      className={twMerge(
        `card w-full flex flex-col items-start gap-2 p-8 rounded-md 
         text-text1 bg-white shadow-sm hover:shadow-md transition-shadow
          ${className}`,
      )}
    />
  );
};

export const SelectableCard = ({ className, ...props }: ICard) => {
  return (
    <Card
      {...props}
      className={twMerge(`border rounded-lg p-4 max-w-sm h-fit cursor-pointer hover:bg-bg2 
          ${props.selected ? "border-blue-500" : ""} ${className}`)}
    />
  );
};

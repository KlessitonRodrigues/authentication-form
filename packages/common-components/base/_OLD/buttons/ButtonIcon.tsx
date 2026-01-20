import { twMerge } from "tailwind-merge";

type IButton = React.HTMLAttributes<HTMLButtonElement>;

export const ButtonIcon = ({ className = "", ...props }: IButton) => {
  return (
    <button
      {...props}
      className={twMerge(
        `p-1 w-fit rounded-md bg-transparent hover:bg-bg2
         transition-opacity ${className}`
      )}
    />
  );
};

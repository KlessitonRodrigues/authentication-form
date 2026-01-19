import { twMerge } from "tailwind-merge";
import { IButton } from "./Button";

export const ButtonOutline = ({ className = "", ...props }: IButton) => {
  return (
    <button
      {...props}
      className={twMerge(
        `flex gap-1 items-center px-4 py-1.5 w-fit rounded-md
         text-text4 bg-transparent hover:bg-bg2 transition-opacity 
         first-letter:uppercase ${className}`
      )}
    />
  );
};

export const ButtonNoOutline = ({ className = "", ...props }: IButton) => {
  return <ButtonOutline {...props} className={`border-none ${className}`} />;
};

export const ButtonOutlineBlue = ({ className = "", ...props }: IButton) => {
  return (
    <ButtonOutline {...props} className={`border-default-blue ${className}`} />
  );
};

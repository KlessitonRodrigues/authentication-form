import { twMerge } from "tailwind-merge";
import { LoaderWhiteSpinner } from "../progress/Loader";

export type IButton = React.HTMLAttributes<HTMLButtonElement> & {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
};

export const Button = ({ className = "", ...props }: IButton) => {
  return (
    <button
      {...props}
      disabled={props.disabled}
      data-disabled={props.disabled}
      className={twMerge(
        `flex items-center gap-1 text-sm px-4 py-1.5 min-w-fit 
         rounded-md shadow-sm text-text4 bg-white transition 
         first-letter:uppercase select-none cursor-pointer
         hover:opacity-70 data-[disabled=true]:bg-default-gray`,
        className,
      )}
    >
      {props.loading && <LoaderWhiteSpinner />}
      {props.children}
    </button>
  );
};

export const ButtonBlue = ({ className = "", ...props }: IButton) => {
  return (
    <Button
      {...props}
      className={`bg-default-blue text-default-white ${className}`}
    />
  );
};

export const ButtonGreen = ({ className = "", ...props }: IButton) => {
  return (
    <Button
      {...props}
      className={`bg-default-green text-default-white ${className}`}
    />
  );
};

export const ButtonRed = ({ className = "", ...props }: IButton) => {
  return (
    <Button
      {...props}
      className={`bg-default-red text-default-white ${className}`}
    />
  );
};

export const ButtonYellow = ({ className = "", ...props }: IButton) => {
  return (
    <Button
      {...props}
      className={`bg-default-yellow text-default-white ${className}`}
    />
  );
};

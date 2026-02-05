import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type IDiv = React.HTMLAttributes<HTMLDivElement>;
type ILabel = React.HTMLAttributes<HTMLLabelElement>;
type ISpan = React.HTMLAttributes<HTMLSpanElement>;
type IInput = React.HTMLAttributes<HTMLInputElement> & { value?: string };
type ISelect = React.HTMLAttributes<HTMLSelectElement> & { value?: string };
type IOption = React.HTMLAttributes<HTMLOptionElement> & { value?: string };

export const Label = ({ className, ...props }: ILabel) => {
  return (
    <label
      {...props}
      className={twMerge(
        `w-full flex flex-col text-sm focus:bg-red-500 ${className}`,
      )}
    />
  );
};

export const LabelError = ({ className, ...props }: ISpan) => {
  return (
    <span {...props} className={twMerge(`text-default-red ${className}`)} />
  );
};

export const LabelIconRight = ({ className, ...props }: ISpan) => {
  return <span {...props} className={twMerge(`-ml-10 mt-1 cursor-pointer`)} />;
};

export const Input = forwardRef<any, IInput>((props, ref) => {
  const { className } = props;
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        `w-full p-2 px-3 mt-1 border text-md rounded-md transition peer
         outline-none hover:border-blue focus:border-blue
         data-[error=true]:border-red
         [&:hover~div]:border-blue [&:focus~div]:border-blue
         [&:focus~div]:text-blue [&~div]:data-[error=true]:border-red
         ${className}`,
      )}
    />
  );
});

export const InputDisplay = ({ className, ...props }: IDiv) => {
  return (
    <div
      {...props}
      className={twMerge(
        `p-2 px-3 h-10 rounded-md border text-nowrap overflow-hidden
         peer-placeholder-shown:text-default-gray ${className}`,
      )}
    />
  );
};

export const Select = ({ className, ...props }: ISelect) => {
  return (
    <select
      {...props}
      className={twMerge(
        `w-full p-2 mt-1 border text-md rounded-md transition bg-transparent
         outline-none hover:border-default-blue focus:border-default-blue
         data-[error=true]:border-default-red ${className}`,
      )}
    />
  );
};

export const SelectOption = ({ className, ...props }: IOption) => {
  return (
    <option
      {...props}
      className={twMerge(`w-full bg-default-white ${className}`)}
    />
  );
};

import { twMerge } from "tailwind-merge";

type IForm = React.HTMLAttributes<HTMLFormElement>;

export const Form = ({ className, ...props }: IForm) => {
  return (
    <form
      {...props}
      className={twMerge(
        `w-full h-full flex flex-col justify-start gap-4 slide-left ${className}`,
      )}
    />
  );
};

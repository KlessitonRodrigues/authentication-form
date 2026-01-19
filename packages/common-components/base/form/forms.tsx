import { twMerge } from "tailwind-merge";
import { AnimationSlide } from "../animations/Slide";

type IForm = React.HTMLAttributes<HTMLFormElement>;

export const Form = ({ className, ...props }: IForm) => {
  return (
    <AnimationSlide className="h-full" to="right">
      <form
        {...props}
        className={twMerge(
          `w-full h-full flex flex-col justify-start gap-4 ${className}`
        )}
      />
    </AnimationSlide>
  );
};

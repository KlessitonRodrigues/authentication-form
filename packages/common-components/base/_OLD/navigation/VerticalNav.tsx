import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import { Column, Row } from "../containers/Flex";
import { AnimationSlide } from "../animations/Slide";

type IVerticalNav = React.HTMLAttributes<HTMLDivElement> & {
  steps: { title: string; icon: ReactNode; disabled?: boolean }[];
};

export const VerticalNav = (props: IVerticalNav) => {
  const { className, steps } = props;
  return (
    <AnimationSlide>
      <Column
        {...props}
        gap={0}
        flexY="start"
        className={twMerge(`p-4 ${className}`)}
      >
        {steps.map((step, index) => {
          const halfTop = index === 0;
          const halfbottom = index === steps.length - 1;
          return (
            <Row
              key={index}
              gap={4}
              className={twMerge(`before:border before:border-gray-200 before:-mr-10
                before:h-20 hover:opacity-80 cursor-pointer  
                ${halfTop ? "before:h-10 before:mt-10" : ""}
                ${halfbottom ? "before:h-10 before:mb-10" : ""}`)}
            >
              <div
                className={`p-2.5 rounded-full 
                ${
                  step.disabled
                    ? "border-gray-400 bg-gray-100 text-gray-500"
                    : "border-blue-500 bg-blue-500 text-gray-200"
                }`}
              >
                {step.icon}
              </div>
              <span>{step.title}</span>
            </Row>
          );
        })}
      </Column>
    </AnimationSlide>
  );
};

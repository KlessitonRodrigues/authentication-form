import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "../text/Text";

export interface LoadScreenProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  children?: React.ReactNode;
}

export const LoadScreen = (props: LoadScreenProps) => {
  const { className, children, ...loadScreenProps } = props;

  return (
    <div
      className={twMerge(
        `absolute w-screen h-screen bg-black z-50 ${className}`,
      )}
      {...loadScreenProps}
    >
      <div className="m-auto flex gap-4 items-center justify-center h-full">
        <span className="loading loading-bars loading-xl text-white" />
        <Text fs="4xl" bold className="text-white">
          {props.title}
        </Text>
        {children}
      </div>
    </div>
  );
};

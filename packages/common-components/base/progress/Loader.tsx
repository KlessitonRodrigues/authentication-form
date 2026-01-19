import { twMerge } from "tailwind-merge";
import { RiLoader4Line } from "react-icons/ri";

type ILoader = React.HTMLAttributes<HTMLDivElement>;

export const LoaderBg = ({ className, ...props }: ILoader) => {
  return (
    <div
      {...props}
      className={twMerge(
        `loader-bg fixed top-0 left-0 w-full h-full bg-opacity-black
         flex items-center justify-center z-50`
      )}
    />
  );
};

export const LoaderSpinner = ({ className, ...props }: ILoader) => {
  return (
    <div {...props}>
      <RiLoader4Line size={24} className="animate-spin text-default-blue" />
    </div>
  );
};

export const LoaderWhiteSpinner = ({ className, ...props }: ILoader) => {
  return (
    <div {...props}>
      <RiLoader4Line size={24} className="animate-spin text-white" />
    </div>
  );
};

export const ListLoader = ({ className, title, ...props }: ILoader) => {
  return (
    <div
      {...props}
      className={twMerge(
        `w-full flex gap-4 items-center border rounded-lg p-4 ${className}`
      )}
    >
      <RiLoader4Line size={24} className="animate-spin text-default-blue" />
      {title && <p className="text-text2">{title}</p>}
    </div>
  );
};

import { twMerge } from "tailwind-merge";

type IFlex = React.HTMLAttributes<HTMLDivElement> & {
  flexY?: "center" | "start" | "end" | "between" | "stretch";
  flexX?: "center" | "start" | "end" | "between" | "stretch";
  resposive?: "sm" | "md" | "lg" | "xl" | "2xl";
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

export const Row = (props: IFlex) => {
  const { className, flexY, flexX, gap } = props;
  const flexStyle = ["flex flex-row w-full"];
  flexStyle.push(`justify-${flexX || "start"}`);
  flexStyle.push(`items-${flexY || "center"}`);
  flexStyle.push(`gap-${gap ?? 2}`);
  if (props.resposive) flexStyle.push(`flex-col ${props.resposive}:flex-row`);
  else flexStyle.push("flex-row");
  if (className) flexStyle.push(className);

  return <div {...props} className={twMerge(flexStyle.join(" "))} />;
};

export const Column = (props: IFlex) => {
  const { className, flexY, flexX, gap } = props;
  const flexStyle = ["w-full h-full flex flex-col"];
  flexStyle.push(`justify-${flexY || "start"}`);
  flexStyle.push(`items-${flexX || "center"}`);
  flexStyle.push(`gap-${gap ?? 2}`);
  if (className) flexStyle.push(className);

  return <div {...props} className={twMerge(flexStyle.join(" "))} />;
};

/* tailwind include
    flex flex-row flex-col
    items-center items-start items-end items-between items-stretch
    justify-center justify-start justify-end justify-between justify-stretch
    gap-0 gap-1 gap-2 gap-3 gap-4 gap-5 gap-6 gap-7 gap-8 gap-9 gap-10
    sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row
*/

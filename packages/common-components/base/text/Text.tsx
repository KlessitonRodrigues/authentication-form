import { twMerge } from "tailwind-merge";

type IText = React.HTMLAttributes<HTMLParagraphElement> & {
  bold?: boolean;
  inline?: boolean;
  className?: string;
  fc?: "blue" | "red" | "green" | "yellow" | "black" | "gray" | "white";
  fs?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  fo?: "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100";
  tag?: "p" | "b" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
};

const TagMap = (props: IText) => {
  const { tag, className, children } = props;
  const tagProps = { className, children };
  if (tag === "p") return <p {...tagProps} />;
  if (tag === "b") return <b {...tagProps} />;
  if (tag === "h1") return <h1 {...tagProps} />;
  if (tag === "h2") return <h2 {...tagProps} />;
  if (tag === "h3") return <h3 {...tagProps} />;
  if (tag === "h4") return <h4 {...tagProps} />;
  if (tag === "h5") return <h5 {...tagProps} />;
  if (tag === "h6") return <h6 {...tagProps} />;
  if (tag === "span") return <span {...tagProps} />;
  if (tag === "small") return <small {...tagProps} />;
  if (tag === "strong") return <strong {...tagProps} />;
  if (tag === "mark") return <mark {...tagProps} />;
  if (tag === "em") return <em {...tagProps} />;
  return <p {...tagProps} />;
};

export const Text = (props: IText) => {
  const { bold, fc, fs, fo, className = "" } = props;
  const textStyle = [];
  if (bold) textStyle.push("font-bold");
  if (fc) textStyle.push(`text-default-${fc}`);
  if (fs) textStyle.push(`text-${fs}`);
  if (fo) textStyle.push(`opacity-${fo}`);
  if (props.inline) textStyle.push("inline");
  if (className) textStyle.push(className);
  return <TagMap {...props} className={twMerge(`${textStyle.join(" ")}`)} />;
};

/* tailwind include
    font-bold font-normal
    text-sm text-md text-lg text-xl text-2xl text-3xl text-4xl text-5xl
    text-default-blue text-default-red text-default-green text-default-yellow text-default-black text-default-gray text-default-white
    opacity-10 opacity-20 opacity-30 opacity-40 opacity-50 opacity-60 opacity-70 opacity-80 opacity-90 opacity-100
*/

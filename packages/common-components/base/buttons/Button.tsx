import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  onClick?: () => void;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "neutral"
    | "info"
    | "success"
    | "warning"
    | "error";
  size?: "xs" | "sm" | "md" | "lg";
  ghost?: boolean;
  link?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { className, ghost, link, ...btnProps } = props;

  const btnClasses = ["btn shadow-sm rounded-sm px-4"];
  if (ghost) btnClasses.push("btn-ghost");
  if (link) btnClasses.push("btn-link");
  btnClasses.push(`btn-${props.color || "primary"}`);
  btnClasses.push(`btn-${props.size || "md"}`);
  btnClasses.push(className || "");

  return (
    <button className={twMerge(...btnClasses)} {...btnProps}>
      {props.label || props.children}
    </button>
  );
};

/* tailwind include
    btn btn-primary btn-secondary btn-accent btn-neutral btn-info btn-success btn-warning btn-error 
    btn-ghost btn-link
    btn-xs btn-sm btn-md btn-lg
*/

import { twMerge } from "tailwind-merge";
import { IconProps, Icons } from "../icons/IconMap";

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
  variant?: "wide" | "block" | "square" | "circle";
  ghost?: boolean;
  link?: boolean;
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { className, ghost, link, loading, ...btnProps } = props;

  const btnClasses = ["btn rounded-sm"];
  if (ghost) btnClasses.push("btn-ghost");
  if (link) btnClasses.push("btn-link");
  if (props.variant) btnClasses.push(`btn-${props.variant}`);
  btnClasses.push(`btn-${props.color || ""}`);
  btnClasses.push(`btn-${props.size || "md"}`);
  btnClasses.push(className || "");

  return (
    <button className={twMerge(...btnClasses)} {...btnProps}>
      {loading && <span className="loading loading-spinner loading-xs" />}
      {props.label || props.children}
    </button>
  );
};

export const IconButton = (props: ButtonProps & IconProps) => {
  return (
    <Button {...props}>
      <Icons icon={props.icon} size={props.size || "22"} />
    </Button>
  );
};

/* tailwind include
    btn btn-primary btn-secondary btn-accent btn-neutral btn-info btn-success btn-warning btn-error 
    btn-ghost btn-link
    btn-xs btn-sm btn-md btn-lg
    btn-wide btn-block btn-square btn-circle
*/

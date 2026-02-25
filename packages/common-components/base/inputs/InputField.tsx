import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";

export interface InputFieldProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  type?: "text" | "email" | "password" | "number" | "date";
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  hideCaret?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const InputField = (props: InputFieldProps) => {
  const { className } = props;
  const inputClasses = ["input outline-none w-full"];
  const fieldsetClasses = ["fieldset w-full"];
  const iptClasses = ["text-base"];

  if (props.error) inputClasses.push("input-error");
  if (inputClasses.includes("input-md")) fieldsetClasses.push(`-mb-4`);
  if (props.hideCaret) iptClasses.push("hide-caret focus:text-primary");
  inputClasses.push(`input-${props.size || "md"}`);

  return (
    <fieldset className={fieldsetClasses.join(" ")}>
      <legend className="fieldset-legend">{props.label}</legend>
      <label className={twMerge(inputClasses.join(" "), className)}>
        {props.before}
        <input
          className={iptClasses.join(" ")}
          type={props.type || "text"}
          placeholder={props.placeholder}
          disabled={props.disabled}
          {...props.inputProps}
        />
        {props.after}
      </label>
      <p className="label text-red">{props.error}</p>
    </fieldset>
  );
};

/* Tailwind include
    input input-sm input-md input-lg
    input-error
    fieldset fieldset-legend
*/

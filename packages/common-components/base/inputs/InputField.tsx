import { HTMLAttributes } from "react";

interface InputFieldProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  label?: string;
  className?: string;
  error?: string;
  disabled?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const InputField = (props: InputFieldProps) => {
  const { className } = props;
  const classNames = ["input rounded-md shadow-sm outline-none w-full"];
  if (props.error) classNames.push("input-error");
  classNames.push(`input-${props.size || "md"}`);
  classNames.push(className || "");

  return (
    <fieldset className="fieldset w-full">
      <legend className="fieldset-legend">{props.label}</legend>
      <label className={classNames.join(" ")}>
        {props.before}
        <input
          className="text-base"
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

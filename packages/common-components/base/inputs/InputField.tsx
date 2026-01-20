interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
  error?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export const InputField = (props: InputFieldProps) => {
  const { className, inputSize = "lg", ...inputFieldProps } = props;
  const classNames = ["input rounded-sm shadow-sm outline-none w-full"];
  if (props.error) classNames.push("input-error");
  classNames.push(`input-${props.inputSize || "md"}`);
  classNames.push(className || "");

  return (
    <fieldset className="fieldset w-full">
      <legend className="fieldset-legend">{props.label}</legend>
      <label className={classNames.join(" ")}>
        {props.before}
        <input type="text" {...inputFieldProps} />
        {props.after}
      </label>
      <p className="label text-default-red">{props.error}</p>
    </fieldset>
  );
};

/* Tailwind include
    input input-sm input-md input-lg
    input-error
    fieldset fieldset-legend
*/

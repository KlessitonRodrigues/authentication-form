import { twMerge } from "tailwind-merge";

interface SelectorProps {
  label?: string;
  description?: string;
  defaultValue?: string;
  options?: { label: string; value: string }[];
  size?: "sm" | "md" | "lg";
  error?: string;
  onChange?: (value: string) => void;
}

export const Selector = (props: SelectorProps) => {
  const { options, label, description, defaultValue, error, onChange } = props;
  const selectClasses = [
    `w-full outline-none select select-${props.size || "md"}`,
  ];
  if (error) selectClasses.push("border-error");

  return (
    <fieldset className="fieldset w-full min-w-40">
      <legend className="fieldset-legend">{label}</legend>
      <select
        className={twMerge(selectClasses.join(" "))}
        defaultValue={defaultValue || "Select"}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {description && <span className="label">{description}</span>}
      {error && <span className="label text-red">{error}</span>}
    </fieldset>
  );
};

/* Tailwind include
    select select-sm select-md select-lg
*/

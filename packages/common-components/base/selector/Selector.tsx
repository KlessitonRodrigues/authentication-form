interface SelectorProps {
  label?: string;
  description?: string;
  defaultValue?: string;
  options?: { label: string; value: string }[];
  onChange?: (value: string) => void;
}

export const Selector = (props: SelectorProps) => {
  const { options, label, description, defaultValue, onChange } = props;

  return (
    <fieldset className="fieldset min-w-20">
      <legend className="fieldset-legend">{label}</legend>
      <select
        defaultValue={defaultValue || "Select"}
        className="select"
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {description && <span className="label">{description}</span>}
    </fieldset>
  );
};

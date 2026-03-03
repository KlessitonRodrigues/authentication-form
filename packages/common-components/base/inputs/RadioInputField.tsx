import { twMerge } from "tailwind-merge";
import { Row } from "../containers/Flex";

interface RadioInputFieldProps {
  className?: string;
  name: string;
  size?: "sm" | "md" | "lg";
  options: { label: string; value: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const RadioInputField = (props: RadioInputFieldProps) => {
  const { className, name, size, options, defaultValue, onChange } = props;
  const iptStyle = ["radio radio-primary mx-2"];
  if (size) iptStyle.push(`radio-${size}`);

  return (
    <Row className={twMerge(className)}>
      {options.map((option, index) => (
        <label key={index} className="cursor-pointer">
          <input
            className={twMerge(...iptStyle, className)}
            type="radio"
            name={name}
            aria-label={option.label}
            defaultChecked={defaultValue === option.value}
            onChange={() => onChange && onChange(option.value)}
          />
          <span className="text-xs">{option.label}</span>
        </label>
      ))}
    </Row>
  );
};

/* Tailwind include
  join join-item
  radio radio-sm radio-md radio-lg
  btn btn-sm btn-md btn-lg
*/

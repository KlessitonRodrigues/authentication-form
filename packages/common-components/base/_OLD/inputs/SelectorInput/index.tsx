"use client";
import {
  Label,
  LabelError,
  Select,
  SelectOption,
} from "../../../base/form/inputs";

type ISelectField = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  input?: any;
  value?: string;
  options?: { label: string; value: string }[];
  onChangeValue?: (value: string) => void;
};

const SelectorInput = ({ options, error, ...props }: ISelectField) => {
  return (
    <Label>
      {props.label}
      <Select
        value={props.value}
        onChange={(ev: any) => props.onChangeValue?.(ev.target.value)}
        data-error={!!error}
      >
        <SelectOption value="">{props.placeholder}</SelectOption>
        {options?.map(({ label, value }) => (
          <SelectOption key={value} value={value}>
            {label}
          </SelectOption>
        ))}
      </Select>
      <LabelError>{error}</LabelError>
    </Label>
  );
};

export default SelectorInput;

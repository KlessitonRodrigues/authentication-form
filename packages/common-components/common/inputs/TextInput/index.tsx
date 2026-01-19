"use client";

import { LabelError, Input, Label } from "../../../base/form/inputs";

type IInputField = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  input?: any;
  value?: string;
  onChangeValue?: (value: string) => void;
};

export const TextInput = (props: IInputField) => {
  const { name, label, placeholder, error, input, value, onChangeValue } =
    props;

  return (
    <Label>
      {label}
      <Input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={name}
        value={value}
        data-error={!!error}
        onChange={(ev: any) => onChangeValue?.(ev.target?.value)}
        {...input}
      />
      <LabelError>{error}</LabelError>
    </Label>
  );
};

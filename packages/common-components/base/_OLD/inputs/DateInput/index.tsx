import { LabelError, Input, Label } from "../../../base/form/inputs";

type IInputField = {
  name?: string;
  label?: string;
  placeholder?: string;
  time?: boolean;
  error?: string;
  input?: any;
  value?: string;
  onChangeValue?: (value: string) => void;
};

export const DateInput = (props: IInputField) => {
  const { name, label, placeholder, time, error, input, value, onChangeValue } =
    props;

  return (
    <Label>
      {label}
      <Input
        type={time ? "time" : "date"}
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={name}
        value={value}
        haserror={error}
        data-error={!!error}
        onChange={(ev: any) => onChangeValue?.(ev.target?.value)}
        {...input}
      />
      <LabelError>{error}</LabelError>
    </Label>
  );
};

import {
  LabelError,
  Input,
  Label,
  InputDisplay,
} from "../../../base/form/inputs";

type IInputField = {
  name?: string;
  label?: string;
  error?: string;
  currency?: string;
  maxLength?: number;
  max?: number;
  min?: number;
  input?: any;
  value?: string;
  onChangeValue?: (value: string) => void;
};

const CurrencyInput = (props: IInputField) => {
  const { name, input, currency = "$", onChangeValue } = props;

  const handleCurrencyIpt = (ev: any) => {
    ev.preventDefault();
    const key = ev.key as string;
    const ipt = ev.target as HTMLInputElement;
    const display = document.getElementById(`display-${ipt.name}`);
    const formatValue = (value: string, add: string) => {
      const valueArr = (value || "0.00").split("");
      const i = valueArr.indexOf(".");
      valueArr.splice(i, 1);

      if (add) {
        valueArr.push(add);
        valueArr.splice(i + 1, 0, ".");
      } else {
        valueArr.pop();
        valueArr.splice(i - 1, 0, ".");
      }
      return Number(valueArr.join("")).toFixed(2);
    };

    if (key === "Backspace") ipt.value = formatValue(ipt.value, "");
    if (ipt.value.length >= 14) return;
    if (key.match(/\d/)) ipt.value = formatValue(ipt.value, key);
    if (display) display.innerText = `${currency} ${ipt.value}`;
  };

  return (
    <Label>
      {props.label}
      <Input
        type="text"
        className="opacity-0"
        id={name}
        name={name}
        autoComplete={name}
        value={props.value}
        data-error={!!props.error}
        onChange={(ev: any) => onChangeValue?.(ev.target?.value)}
        onKeyDown={handleCurrencyIpt}
        {...input}
      />
      <InputDisplay className="-mt-10" id={`display-${name || input?.name}`}>
        {`${currency} 0.00`}
      </InputDisplay>
      <LabelError>{props.error}</LabelError>
    </Label>
  );
};

export default CurrencyInput;

import { InputField, InputFieldProps } from "./InputField";

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
  if (display) display.innerText = ipt.value;
};

export const CurrencyInputField = (props: InputFieldProps) => {
  return (
    <InputField
      {...props}
      hideCaret
      inputProps={{
        ...props.inputProps,
        onKeyDown: handleCurrencyIpt,
      }}
    />
  );
};

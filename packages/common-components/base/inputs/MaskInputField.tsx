import { InputField, InputFieldProps } from "./InputField";

interface MaskInputFieldProps extends InputFieldProps {
  mask: string;
}

const handleMaskIpt = (ev: any, mask: string) => {
  ev.preventDefault();
  const key = ev.key as string;
  const ipt = ev.target as HTMLInputElement;
  const maskLength = (mask.match(/x/g) || []).length;

  const formatMask = (str: string, template: string) => {
    let strIndex = 0;
    return template
      .split("")
      .map((char) => {
        if (char === "x" && strIndex < str.length) {
          return str[strIndex++];
        }
        return char === "x" ? "_" : char;
      })
      .join("");
  };

  let cleanValue = ipt.value.replace(/\D/g, "");

  if (key === "Backspace") {
    cleanValue = cleanValue.slice(0, -1);
  } else if (key.match(/\d/)) {
    if (cleanValue.length < maskLength) cleanValue += key;
  }

  const formattedValue = formatMask(cleanValue, mask);
  ipt.value = formattedValue;
};

export const MaskInputField = (props: MaskInputFieldProps) => {
  const { inputProps, mask } = props;

  return (
    <InputField
      {...props}
      hideCaret
      inputProps={{
        ...inputProps,
        onKeyDown: (ev) => handleMaskIpt(ev, mask),
      }}
    />
  );
};

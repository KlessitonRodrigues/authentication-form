"use client";

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
  mask?: string;
  maxLength?: number;
  max?: number;
  min?: number;
  input?: any;
  value?: string;
  onChangeValue?: (value: string) => void;
};

export const NumberInput = (props: IInputField) => {
  const { name, mask = "", input, onChangeValue } = props;

  const handleNumberIpt = (ev: any) => {
    ev.preventDefault();
    const key = ev.key as string;
    const ipt = ev.target as HTMLInputElement;
    const display = document.getElementById(`display-${ipt.name}`);
    // @ts-ignore
    const maskLength = mask.matchAll(/(x)/g).toArray().length;

    const formatMask = (str: string, template: string) => {
      const maskArr = Array.from(template);
      for (const char of str) {
        const i = maskArr.indexOf("x");
        if (i >= 0) maskArr[i] = char;
      }
      return maskArr.join("");
    };

    if (key === "Backspace") ipt.value = ipt.value.slice(0, -1);
    if (ipt.value.length >= maskLength) return;
    if (key.match(/\d/)) ipt.value += key;
    if (display) display.innerText = formatMask(ipt.value, mask);
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
        onKeyDown={handleNumberIpt}
        {...input}
      />
      <InputDisplay className="-mt-10" id={`display-${name || input?.name}`}>
        {props.mask}
      </InputDisplay>
      <LabelError>{props.error}</LabelError>
    </Label>
  );
};

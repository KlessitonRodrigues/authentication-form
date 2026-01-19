"use client";
import { useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { Row } from "../../../base/containers/Flex";
import {
  LabelError,
  Input,
  Label,
  LabelIconRight,
} from "../../../base/form/inputs";

type IInputField = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  input?: any;
  value?: string;
  onChangeValue?: (value: string) => void;
};

export const PasswordInput = (props: IInputField) => {
  const { name, label, placeholder, error, input, value, onChangeValue } =
    props;
  const [visible, setVisible] = useState(false);

  return (
    <Label>
      {label}
      <Row>
        <Input
          type={visible ? "text" : "password"}
          id={name}
          name={name}
          placeholder={placeholder}
          autoComplete={name}
          value={value}
          data-error={!!error}
          onChange={(ev: any) => onChangeValue?.(ev.target?.value)}
          {...input}
        />
        <LabelIconRight>
          {visible && (
            <PiEyeBold size={22} onClick={() => setVisible(!visible)} />
          )}
          {!visible && (
            <PiEyeClosedBold size={22} onClick={() => setVisible(!visible)} />
          )}
        </LabelIconRight>
      </Row>
      <LabelError>{error}</LabelError>
    </Label>
  );
};

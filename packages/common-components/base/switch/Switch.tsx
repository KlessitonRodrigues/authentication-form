"use client";
import { Icons } from "../icons/IconMap";
import { Row } from "../containers/Flex";
import { Text } from "../text/Text";

interface SwitchProps {
  label: string;
  beforeElement?: React.ReactNode;
  afterElement?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch = (props: SwitchProps) => {
  const { label, checked, beforeElement, afterElement, onChange } = props;

  return (
    <Row>
      <Text fs="sm">{label}</Text>
      {beforeElement}
      <label className="toggle toggle-md border">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <Icons icon="close" size="16" aria-label="enabled" />
        <Icons icon="checkMark" size="16" aria-label="disabled" />
      </label>
      {afterElement}
    </Row>
  );
};

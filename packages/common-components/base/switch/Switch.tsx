"use client";
import { Icons } from "../icons/IconMap";
import { Row } from "../containers/Flex";
import { Text } from "../text/Text";

interface SwitchProps {
  label: string;
  onChange?: (checked: boolean) => void;
}

export const Switch = (props: SwitchProps) => {
  const { label, onChange } = props;

  return (
    <Row>
      <Text fs="sm">{label}</Text>
      <label className="toggle toggle-md border">
        <input type="checkbox" onChange={(e) => onChange?.(e.target.checked)} />
        <Icons icon="close" size="16" aria-label="enabled" />
        <Icons icon="checkMark" size="16" aria-label="disabled" />
      </label>
    </Row>
  );
};

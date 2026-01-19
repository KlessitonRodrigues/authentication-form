import Select from "react-select";
import { Label, LabelError } from "../../../base/form/inputs";

type ISelectionField = {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  options?: { value: string; label: string }[];
  onChange?: (option: { value: string; label: string }) => void;
};

const SelectionInput = (props: ISelectionField) => {
  const { label, placeholder, error, options, onChange } = props;

  return (
    <Label>
      {label}
      <Select
        className={`react-selector ${error ? "error" : ""}`}
        classNamePrefix="react-selector"
        closeMenuOnSelect
        isClearable
        placeholder={placeholder}
        options={options}
        onChange={(option) => {
          const value = { value: "", label: "", ...option };
          onChange && onChange(value);
        }}
      />
      <LabelError>{error}</LabelError>
    </Label>
  );
};

export default SelectionInput;

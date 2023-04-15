import React from "react";
import { VisuallyHiddenInput, Label } from "/src/components/elements";

function Checkbox({
  labelComponent,
  name,
  value,
  selectedValues = [],
  text,
  onChange,
  ...props
}) {
  const isChecked = selectedValues.includes(value);
  const LabelComponent = labelComponent;

  return (
    <Label>
      <VisuallyHiddenInput
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
        {...props}
      />
      <LabelComponent $isChecked={isChecked}>{text}</LabelComponent>
    </Label>
  );
}

export default Checkbox;

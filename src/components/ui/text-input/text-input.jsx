import React from "react";
import { StyledInput } from "./styles";

function TextInput({ name, value, placeholder, onChange }) {
  return (
    <StyledInput
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextInput;

import React from "react";
import { StyledButton } from "./styles";

function Button({ children, maxWidth, link, className, disabled, onClick }) {
  return (
    <StyledButton
      className={className}
      $maxWidth={maxWidth}
      disabled={disabled}
      onClick={onClick}
      {...(link ? { to: link } : { as: "button", type: "button" })}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

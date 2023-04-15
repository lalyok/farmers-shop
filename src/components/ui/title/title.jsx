import React from "react";
import { StyledTitle } from "./styles";

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6"
};

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  TINY: "tiny",
  DEFAULT: ""
};

function Title({ children, size, level, className }) {
  return (
    <StyledTitle className={className} $size={size} as={`h${level || "1"}`}>
      {children}
    </StyledTitle>
  );
}

export default Title;

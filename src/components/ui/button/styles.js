import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: block;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  max-width: 700px;
  max-height: 60px;
  background-color: ${(props) => props.theme.buttonColor};
  border: none;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize};
  font-family: inherit;
  line-height: 58px;
  color: ${(props) => props.theme.basicWhite};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.buttonHoverColor};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    text-decoration: none;
  }

  &:active {
    box-shadow: none;
    text-decoration: none;
  }

  &:disabled {
    background-color: ${(props) => props.theme.basicGray};
    color: ${(props) => props.theme.textColor};
    cursor: default;

    &:hover,
    &:focus,
    &:active {
      box-shadow: none;
      text-decoration: none;
    }
  }
`;

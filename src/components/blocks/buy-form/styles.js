import styled, { css } from "styled-components";
import tick from "/src/assets/tick.svg";

export const StyledFieldset = styled.fieldset`
  padding-right: ${(props) => props.theme.indent};
  padding-left: ${(props) => props.theme.indent};
  padding-top: 24px;
  padding-bottom: ${(props) =>
    props.$paddingBottom ? `${props.$paddingBottom}px` : props.theme.indent};
  ${(props) =>
    props.$marginBottom &&
    css`
      margin-bottom: ${props.$marginBottom}px;
    `}
  min-height: 315px;
  box-sizing: border-box;
  background: ${(props) => props.theme.basicWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const Legend = styled.p`
  margin-top: 0;
  margin-bottom: ${(props) => (props.$bottom ? `${props.$bottom}px` : "24px")};
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: ${(props) => props.theme.textColor};
`;

export const CheckboxLabel = styled.span`
  display: block;
  padding-top: 15px;
  padding-bottom: 14px;
  cursor: pointer;
  position: relative;

  &::before {
    display: block;
    content: "";
    width: 24px;
    height: 24px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${(props) =>
      props.$isChecked ? props.theme.buttonColor : props.theme.basicGray};
    position: absolute;
    top: 16px;
    right: 0;
  }

  ${(props) =>
    props.$isChecked &&
    css`
      &::after {
        display: block;
        content: "";
        width: 16px;
        height: 12px;
        background-image: url(${tick});
        position: absolute;
        top: 22px;
        right: 4px;
      }
    `}
`;

export const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  margin-top: 0;
  margin-bottom: 32px;
`;

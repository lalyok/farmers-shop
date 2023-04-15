import styled from "styled-components";
import { FlexContainer } from "/src/components/elements";

export const StyledFooter = styled.footer`
  ${FlexContainer}
  height: ${(props) => props.theme.footerHeight};
  padding-top: 18px;
  padding-bottom: 18px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.basicWhite};
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;

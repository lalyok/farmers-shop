import styled from "styled-components";
import { FlexContainer } from "/src/components/elements";

export const StyledHeader = styled.header`
  ${FlexContainer}
  min-height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

import { css } from "styled-components";

const FlexContainer = css`
  box-sizing: border-box;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default FlexContainer;

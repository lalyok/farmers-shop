import styled from "styled-components";

export const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  position: relative;
  box-sizing: border-box;
`;

export default Section;

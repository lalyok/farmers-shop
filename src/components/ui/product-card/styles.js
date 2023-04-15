import styled from "styled-components";
import Title from "/src/components/ui/title/title";

export const Container = styled.article`
  width: 727px;
  box-sizing: border-box;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) => props.theme.basicWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 248px 1fr;
  column-gap: ${(props) => props.theme.indent};
  overflow: hidden;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 16px;
`;

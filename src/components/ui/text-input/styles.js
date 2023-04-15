import styled from "styled-components";

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  max-width: 700px;
  background-color: ${(props) => props.theme.basicGray};
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 14px 12px;
  font-size: 14px;
  box-sizing: border-box;
  margin-bottom: 20px;

  &::placeholder {
    font: inherit;
  }
`;

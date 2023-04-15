import styled, { css } from "styled-components";

const Label = styled.label`
  display: block;
  ${(props) =>
    props.$small &&
    css`
      font-size: 14px;
      line-height: 21px;
    `}
  margin-bottom: ${(props) => (props.$bottom ? `${props.$bottom}px` : 0)};
`;

export default Label;

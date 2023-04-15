import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  width: ${(props) => (props.$width ? `${props.$width}px` : "auto")};
  object-fit: contain;
`;

export default Image;

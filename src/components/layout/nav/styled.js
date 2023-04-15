import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  color: ${(props) => props.theme.textColor};
  font-weight: bold;
  text-decoration: none;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

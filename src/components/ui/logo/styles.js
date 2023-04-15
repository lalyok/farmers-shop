import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const logoStyle = css`
  display: flex;
  align-items: center;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

export const LogoText = styled.span`
  margin-left: 24px;
  color: ${(props) => props.theme.textColor};
  font-weight: 700;
  font-size: 28px;
  line-height: 115%;
`;

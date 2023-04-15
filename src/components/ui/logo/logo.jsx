import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, StyledLogoMainPage, LogoText } from "./styles";
import { AppRoute } from "/src/const";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage to={AppRoute.MAIN}>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;

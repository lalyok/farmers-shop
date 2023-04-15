import React from "react";
import { useLocation } from "react-router-dom";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";

import { StyledButton } from "./styled";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton to={AppRoute.MAIN} key={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.BUY,
    button: (
      <Button link={AppRoute.BUY} key={AppRoute.BUY}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const { pathname } = useLocation();
  return (
    <nav>
      {buttons
        .filter((button) => button.to !== pathname)
        .map((button) => button.button)}
    </nav>
  );
}

export default Nav;

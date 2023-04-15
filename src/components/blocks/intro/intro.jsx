import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledIntro, TextWrapper, IntroText } from "./styles";

function Intro() {
  return (
    <StyledIntro>
      <TextWrapper>
        <Title size={TitleSize.BIG}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <IntroText>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </IntroText>
      </TextWrapper>
    </StyledIntro>
  );
}

export default Intro;

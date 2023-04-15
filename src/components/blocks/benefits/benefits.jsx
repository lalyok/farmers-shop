import React from "react";
import Title from "/src/components/ui/title/title";
import InfoblocksList from "/src/components/blocks/infoblocks-list/infoblocks-list";
import Button from "/src/components/ui/button/button";
import { Section } from "/src/components/elements";
import { AppRoute } from "/src/const";

import { BenefitsWrapper, BenefitsContainer } from "./styles";

function Benefits({ advantages, disadvantages }) {
  return (
    <Section>
      {advantages?.length ? (
        <BenefitsWrapper>
          <Title>Почему фермерские продукты лучше?</Title>
          <BenefitsContainer>
            <InfoblocksList blocksList={advantages} />
            <InfoblocksList blocksList={disadvantages} />
          </BenefitsContainer>
          <Button link={AppRoute.BUY}>Купить</Button>
        </BenefitsWrapper>
      ) : null}
    </Section>
  );
}

export default Benefits;

import React from "react";
import { Container, StyledTitle } from "./styles";
import { TitleSize } from "/src/components/ui/title/title";
import { Image } from "/src/components/elements";
import Tabs from "./tabs/tabs";

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: product.description,
      price: product.price
    },
    {
      title: "Характеристики",
      content: product.parameters,
      isHTML: true
    },
    {
      title: "Свойства",
      content: product.properties,
      isHTML: true
    }
  ];

  return (
    <Container>
      <Image src={product.src} alt={product.name} width={248} />
      <div>
        <StyledTitle size={TitleSize.TINY} level="3">
          {product.name}
        </StyledTitle>
        <Tabs tabs={tabs} />
      </div>
    </Container>
  );
}

export default ProductCard;

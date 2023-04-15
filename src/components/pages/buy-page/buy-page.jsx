import React, { useState } from "react";
import BuyForm from "/src/components/blocks/buy-form/buy-form";
import { Wrapper, StyledSection, SliderWrapper, FormWrapper } from "./styles";
import CardsSlider from "/src/components/blocks/cards-slider/cards-slider";

function BuyPage({ products }) {
  const [selectedValues, setSelectedValues] = useState([]);
  const [sliderRef, setSliderRef] = useState(null);

  const slideTo = (index) => {
    sliderRef.slideTo(index, 300);
  };

  const handleChange = (value) => {
    const newValues = [...selectedValues];
    const valueIndex = newValues.indexOf(value);

    if (valueIndex !== -1) {
      newValues.splice(valueIndex, 1);
    } else {
      newValues.push(value);
      slideTo(value);
    }
    setSelectedValues(newValues);
  };

  return products && products.length ? (
    <Wrapper>
      <StyledSection>
        <FormWrapper>
          <BuyForm
            products={products}
            selectedValues={selectedValues}
            onChange={handleChange}
          />
        </FormWrapper>
        <SliderWrapper>
          <CardsSlider products={products} onSwiper={setSliderRef} />
        </SliderWrapper>
      </StyledSection>
    </Wrapper>
  ) : (
    <p>Всё разобрали :(</p>
  );
}

export default BuyPage;

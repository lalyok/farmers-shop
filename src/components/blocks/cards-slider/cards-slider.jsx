import React from "react";
import { Scrollbar, FreeMode, Mousewheel, Virtual } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import ProductCard from "/src/components/ui/product-card/product-card";
import { StyledSlider } from "./styles";

function CardsSlider({ products, onSwiper }) {
  return (
    <StyledSlider
      slidesPerView={3}
      slidesOffsetAfter={588}
      spaceBetween={12}
      direction="vertical"
      freeMode={true}
      scrollbar={{ draggable: true, hide: true }}
      mousewheel={true}
      virtual
      modules={[FreeMode, Scrollbar, Mousewheel, Virtual]}
      onSwiper={onSwiper}
    >
      {products &&
        products.length &&
        products.map((product) => (
          <SwiperSlide key={product.id} virtualIndex={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
    </StyledSlider>
  );
}

export default CardsSlider;

import React from "react";
import SwiperCore, { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";

SwiperCore.use([Scrollbar]);

function Slider({ items }) {
  return <Swiper slidesPerView={3} spaceBetween={12} loop={true}></Swiper>;
}

export default Slider;

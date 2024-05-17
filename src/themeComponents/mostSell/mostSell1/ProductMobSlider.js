import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { productsSection } from "../../../../data";
import MostSellCard from "./MostSellCard";
import Right from "./assets/images/right-arrow.svg";
import Left from "./assets/images/left-arrow.svg";
import React from "react";

const ProductMobSlider = () => {
  return (
    <>
      <div className="products-swiper">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            990: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },

            1: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            nextEl: ".product-next",
            prevEl: ".product-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {productsSection.map((product, index) => {
            return (
              <SwiperSlide key={index}>
                <MostSellCard product={product}  />;
              </SwiperSlide>
            );
          })}

          <div className="swiper-bttns">
            <button className="product-next">
              <Right />
            </button>
            <button className="product-prev">
              <Left />
            </button>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default ProductMobSlider;

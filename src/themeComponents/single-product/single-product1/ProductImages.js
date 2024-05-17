import React, { useState } from "react";
import Image from "next/future/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from 'swiper';

import product1 from "./assets/images/product1.png";
import product2 from "./assets/images/product2.png";
import product3 from "./assets/images/product3.png";

const ProductImages = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="product-slider">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className="main-swiper"
        >
          <SwiperSlide>
            <div className="slide">
              <div className="slide-img">
                <Image src={product1} alt="product-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <div className="slide-img">
                <Image src={product2} alt="product-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <div className="slide-img">
                <Image src={product3} alt="product-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <div className="slide-img">
                <Image src={product1} alt="product-img" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="sub-swiper"
        >
          <SwiperSlide>
            <div className="sub-slide">
              <div className="sub-slide-img">
                <Image src={product1} alt="product-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sub-slide">
              <div className="sub-slide-img">
                <Image src={product2} alt="product-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sub-slide">
              <div className="sub-slide-img">
                <Image src={product3} alt="product-img" />
              </div>
            </div>
          </SwiperSlide>

         
        </Swiper>

      </div>
    </>
  );
};

export default ProductImages;

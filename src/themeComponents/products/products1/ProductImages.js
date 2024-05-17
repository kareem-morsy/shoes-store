import React, { useState } from "react";
import Image from "next/future/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from 'swiper';

import slider1 from "../../../assets/images/slider1.png";
import slider2 from "../../../assets/images/slider2.png";
import slider3 from "../../../assets/images/slider3.png";
import slider4 from "../../../assets/images/slider4.png";

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
                <Image src={slider1} alt="slider-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <div className="slide-img">
                <Image src={slider2} alt="slider-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <div className="slide-img">
                <Image src={slider3} alt="slider-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <div className="slide-img">
                <Image src={slider1} alt="slider-img" />
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
                <Image src={slider1} alt="slider-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sub-slide">
              <div className="sub-slide-img">
                <Image src={slider2} alt="slider-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sub-slide">
              <div className="sub-slide-img">
                <Image src={slider3} alt="slider-img" />
              </div>
            </div>
          </SwiperSlide>

         
        </Swiper>

      </div>
    </>
  );
};

export default ProductImages;

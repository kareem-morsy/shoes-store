import React from "react";
import { blogswiper } from "../../../../data";
import BlogSecCard from "./BlogSecCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Right from "./assets/images/right-arrow.svg";
import Left from "./assets/images/left-arrow.svg";

const BlogMobSlider = () => {
  return (
    <>
      <div className="blogs-swiper">
        <Swiper
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 3000,
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
          {blogswiper?.map((blog, index) => {
            return (
              <SwiperSlide key={index}>
                <BlogSecCard blog={blog}  />
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

export default BlogMobSlider;

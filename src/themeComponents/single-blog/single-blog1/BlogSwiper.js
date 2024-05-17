import React from "react";
import { trendsBlogs } from "../../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Right from "./assets/images/right-arrow.svg";
import Left from "./assets/images/left-arrow.svg";
import BlogCard from "./BlogCard";

const BlogsSlider = () => {
  return (
    <>
      <div className="blogs-mobile">
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
          {trendsBlogs?.map((blog, index) => {
            return (
              <SwiperSlide key={index}>
                <BlogCard blog={blog} />
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

export default BlogsSlider;

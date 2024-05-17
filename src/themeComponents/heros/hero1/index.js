import React from "react";
import styles from "./styles/MainSlider.module.scss";
import Image from "next/future/image";
import slide1 from "./assets/images/slide1.png";
import slide2 from "./assets/images/slide2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";




const MainSlider = () => {
  return (
    <>
      <section className={styles.mainSlider}>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide">
              <Image src={slide1} alt="slide-img" />
              <Link href="/">
                <a className="slide-overlay"></a>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <Image src={slide2} alt="slide-img" />
              <Link href="/">
                <a className="slide-overlay"></a>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <Image src={slide1} alt="slide-img" />

              <Link href="/">
                <a className="slide-overlay"></a>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide">
              <Image src={slide2} alt="slide-img" />
              <Link href="/">
                <a className="slide-overlay"></a>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default MainSlider;

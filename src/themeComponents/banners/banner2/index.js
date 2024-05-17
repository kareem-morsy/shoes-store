import style from './styles/Style.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from 'next/future/image';
import slide1 from "./assets/images/slide1.png";
import slide2 from "./assets/images/slide2.png"


const OfferSilder = () => {
  return (
    <>
      <div className={style.offerSilder}>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className='slide'> 
                <Image src={slide2} alt="slider-img" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slide'> 
                <Image src={slide1} alt="slider-img" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='slide'> 
                <Image src={slide2} alt="slider-img" />
            </div>
          </SwiperSlide>

          
          
        </Swiper>
      </div>
    </>
  );
};

export default OfferSilder;

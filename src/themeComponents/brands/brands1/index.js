import React from "react";
import styles from "./styles/Brands.module.scss";
import Image from "next/future/image";
import brand1 from "./assets/images/brand1.png";
import brand2 from "./assets/images/brand2.png";
import brand3 from "./assets/images/brand3.png";
import brand4 from "./assets/images/brand4.png";
import brand5 from "./assets/images/brand5.png";
import brand6 from "./assets/images/brand6.png";
import Title from './assets/images/title.svg';
import MobSwiper from "./MobSwiper";


const Brands = () => {
  return (
    <>
      <section className={styles.brandSection}>
        <div className="container">
          <div className="section-title">
            <h2>أشهر الماركات</h2>
            <div className="title-img">
              <Title />
            </div>
          </div>

          <div className="brands-container">
            <div className="brand-card">
              <Image src={brand1} alt="brand-image" />
            </div>

            <div className="brand-card">
              <Image src={brand2} alt="brand-image" />
            </div>

            <div className="brand-card">
              <Image src={brand3} alt="brand-image" />
            </div>

            <div className="brand-card">
              <Image src={brand4} alt="brand-image" />
            </div>

            <div className="brand-card">
              <Image src={brand5} alt="brand-image" />
            </div>

            <div className="brand-card">
              <Image src={brand6} alt="brand-image" />
            </div>
          </div>

          <div className="brands-mobile">
            <MobSwiper/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;

import React from "react";
import styles from "./styles/Style.module.scss";
import Image from "next/future/image";
import Link from "next/link";
import men from './assets/images/men.png';
import women from './assets/images/women.png';
import Title from './assets/images/title.svg';

const CategoriesSection = () => {
  return (
    <>
      <section className={styles.categorySection}>
        <div className="container">

          <div className="section-title">
            <h2>التصنيفات</h2>
            <div className="title-img">
              <Title/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="categories-card">
                <div className="categories-card-img">
                  <Image src={men} alt="glasses" />
                </div>

                <Link href="/">
                  <a className="categories-card-overlay"></a>
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="categories-card">
                <div className="categories-card-img">
                  <Image src={women} alt="glasses" />
                </div>

                <Link href="/">
                  <a className="categories-card-overlay"></a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;

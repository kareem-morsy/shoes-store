import styles from "./styles/RecentlyAdd.module.scss";
import RecentlyCard from "./RecentlyCard";
import { productsSection } from "../../../../data";
import Title from "./assets/images/title.svg";
import Link from "next/link";
import { useState } from "react";
import SharedModal from "./SharedModal";
import ProductMobSlider from "./ProductMobSlider";
import { FormattedMessage } from "react-intl";
const RecentlyAdd = () => {
  return (
    <>
      <section className={styles.recentlyAdd}>
        <div className="container">
          <div className="section-title">
            <h2>أحدث المنتجات</h2>
            <div className="title-img">
              <Title />
            </div>
          </div>

          <div className="desktop-rently">
            <div className="row">
              {productsSection.map((product, index) => {
                return (
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 col-12"
                    key={index}
                  >
                    <RecentlyCard product={product} />
                  </div>
                );
              })}
            </div>
            <div className="more-bttn">
              <Link href="/products">
                <a><FormattedMessage id="seeMore"/></a>
              </Link>
            </div>
          </div>

          <div className="mobile-rently">
            <ProductMobSlider/>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentlyAdd;

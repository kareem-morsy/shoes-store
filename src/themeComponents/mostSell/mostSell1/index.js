import React from "react";
import styles from "./styles/styles.module.scss";
import { productsSection } from "../../../../data";
import MostSellCard from "./MostSellCard";
import Title from "./assets/images/title.svg";
import Link from "next/link";
import ProductMobSlider from "./ProductMobSlider";
import { FormattedMessage } from "react-intl";

const MostSell = () => {
  return (
    <>
      <section className={styles.mostSell}>
        <div className="container">
          <div className="section-title">
            <h2>الأكثر مبيعا</h2>
            <div className="title-img">
              <Title />
            </div>
          </div>

          <div className="desktop-mostSell">
            <div className="row">
              {productsSection.map((product, index) => {
                return (
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 col-12"
                    key={index}
                  >
                    <MostSellCard product={product} />
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


          <div className="mobile-mostSell">
            <ProductMobSlider/>
          </div>
        </div>
      </section>
    </>
  );
};

export default MostSell;

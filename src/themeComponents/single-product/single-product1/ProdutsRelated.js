import LeftArrow from "./assets/images/left-arrow.svg";
import RightArrow from "./assets/images/right-arrow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import RelatedCard from "./RelatedCard";
import { productsSection } from "../../../../data";
import Title from "./assets/images/title.svg";

const ProdutsRelated = () => {
  return (
    <>
      <div className="related-products">
        <div className="related-products-slider">
          <div className="container">
            <div className="section-title">
              <h2>أحدث المنتجات</h2>
              <div className="title-img">
                <Title />
              </div>
            </div>

            <div className="related-show">
              <div className="row">
                {productsSection.map((product, index) => {
                  return (
                    <div className="col-md-3 col-12">
                      <RelatedCard product={product} key={index} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdutsRelated;

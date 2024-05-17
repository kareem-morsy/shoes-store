import React, { useState } from "react";
import Image from "next/future/image";
import Link from "next/link";
import Bag2 from "./assets/images/Bag2.svg";
import Like2 from "./assets/images/like2.svg";
import ZoomIcon from "./assets/images/zoom.svg";
import Rate from "rc-rate";
import SharedModal from "./SharedModal";

const ProductCardColumn = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="product-horizontal-card">
        <div className="card-img">
          <Image src={product.image} alt="Product-Image" />
          <div className="horizontal-card-overlay">
            <button>
              <ZoomIcon />
            </button>
          </div>
        </div>

        <div className="horizontal-card-content">
          <div className="card-title-price">
            <Link href="/single-product">
              <a className="card-title">{product.title}</a>
            </Link>
            <div className="card-price">
              <span className="current-price">175 ر.س</span>
              <span className="past-price">250 ر.س</span>
            </div>
          </div>

          <div className="stars">
            <Rate value={3.5} allowHalf="true" disabled />
          </div>

          <div className="product-desc">
            <p>
              المتجر الإلكتروني للأحذية هو المكان الأمثل للحصول على أحذية مختلفة
              الأنواع بأسعار منخفضة. يوفر المتجر الإلكتروني أحذية بجودة عالية من
              أشهر العلامات التجارية العالمية. يوجد أيضًا خيارات مختلفة من
              الأحذية النسائية والرجالية، مما يجعله خيارًا مثاليً
            </p>
          </div>

          <div className="card-bttns">
            <button className="add-bttn">
              <span>
                <Bag2 />
              </span>
              أضف الى السلة
            </button>
            <button className="fav-bttn">
              <Like2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardColumn;

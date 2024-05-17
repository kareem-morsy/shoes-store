import Image from "next/future/image";
import Link from "next/link";
import Rate from "rc-rate";
import Like from "./assets/images/like.svg";
import Bag2 from "./assets/images/bag2.svg";
import Facebook from "./assets/images/facebook.svg";
import Twitter from "./assets/images/twitter.svg";
import Instagram from "./assets/images/instagram.svg";
import Snap from "./assets/images/snap.svg";
import { FormattedMessage } from "react-intl";

const ProductCardInfo = () => {
  return (
    <>
      <div className="product-info">
        <h4>حذاء رياضي ( اديداس )</h4>

        <div className="stars">
          <Rate value={3.5} allowHalf="true" disabled />
        </div>

        <div className="price">
          <p className="current">300 ر.س</p>
          <p className="past">450 ر.س</p>
        </div>

        <p className="product-info-desc">
          المتجر الإلكتروني للأحذية هو المكان الأمثل للحصول على أحذية مختلفة
          الأنواع بأسعار منخفضة. يوفر المتجر الإلكتروني أحذية بجودة عالية من
          أشهر العلامات التجارية العالمية. يوجد أيضًا خيارات مختلفة من الأحذية
          النسائية والرجالية، مما يجعله خيارًا مثاليً
        </p>

        <div className="card-info-details">
          <h6>اللون : </h6>
          <p>بنى</p>
        </div>

        <div className="card-info-details">
          <h6>المقاس :</h6>
          <p>7.5</p>
        </div>

        <div className="card-info-details">
          <h6>الشحن :</h6>
          <p>متاح الشحن مقابل 5 ر.س</p>
        </div>

        <div className="card-info-details">
          <h6>SKU :</h6>
          <p>su8</p>
        </div>

        <div className="card-info-details">
          <h6>التصنيف : </h6>
          <p>حذاء نسائي رياضي</p>
        </div>

        <div className="card-info-details">
          <h6>المخزون :</h6>
          <p className="stock">غير متاح فى المخزن</p>
        </div>

        <div className="info-social">
          <h6>
            <FormattedMessage id="share" /> :
          </h6>
          <div className="social">
            <Link href="/">
              <a>
                <Facebook />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Twitter />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Instagram />
              </a>
            </Link>

            <Link href="/">
              <a>
                <Snap />
              </a>
            </Link>
          </div>
        </div>

        <div className="info-salla">
          <div className="Salla-count">
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </div>

          <button className="add-cart">
            <span>
              <Bag2 />
            </span>
            <FormattedMessage id="addToCart" />
          </button>

          <button className="favourite">
            <span>
              <Like />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCardInfo;

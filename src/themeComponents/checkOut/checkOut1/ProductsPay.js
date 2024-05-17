import Image from "next/future/image";
import prdouct1 from "./assets/images/product1.png";
import prdouct2 from "./assets/images/product2.png";
import Coupon from "./assets/images/coupon.svg";
import Link from "next/link";
import { FormattedMessage, useIntl } from "react-intl";

const ProductsPay = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="products-pay-details">
        <div className="container">
          <div className="product-details">
            <div className="product-img-details">
              <div className="product-img">
                <Image src={prdouct1} alt="product-img" />
                <span className="products-num">1</span>
              </div>

              <div className="product-name">
                <h5>نظارة حريمى حديثة</h5>
                <p>المقاس :25 / اللون : ازرق</p>
              </div>
            </div>

            <h4>س.ر 55</h4>
          </div>

          <div className="product-details">
            <div className="product-img-details">
              <div className="product-img">
                <Image src={prdouct2} alt="product-img" />
                <span className="products-num">1</span>
              </div>

              <div className="product-name">
                <h5>نظارة حريمى حديثة</h5>
                <p>المقاس :25 / اللون : ازرق</p>
              </div>
            </div>

            <h4>س.ر 55</h4>
          </div>

          <div className="product-details">
            <div className="product-img-details">
              <div className="product-img">
                <Image src={prdouct1} alt="product-img" />
                <span className="products-num">1</span>
              </div>

              <div className="product-name">
                <h5>نظارة حريمى حديثة</h5>
                <p>المقاس :25 / اللون : ازرق</p>
              </div>
            </div>

            <h4>س.ر 55</h4>
          </div>

          <div className="products-pay-coupon">
            <h5><FormattedMessage id="discountCoupon"/></h5>
            <div className="coupon-form">
              <span>
                <Coupon />
              </span>
              <input
                type="text"
                placeholder={formatMessage({
                  id: "discountCoupon",
                })}
              />
              <button>
                <FormattedMessage id="apply" />
              </button>
            </div>
          </div>

          <div className="product-details-total">
            <h5>
              <FormattedMessage id="subTotal" />
            </h5>

            <p>165ر.س</p>
          </div>

          <div className="product-details-total">
            <h5>
              <FormattedMessage id="shipping" />
            </h5>

            <p>يحسب فى مرحلة الدفع</p>
          </div>

          <div className="product-details-total total-price">
            <h5><FormattedMessage id="total" /></h5>

            <h6>165ر.س</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPay;

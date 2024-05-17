import Link from "next/link";
import CouponImag from "./assets/images/coupon.svg";
import { FormattedMessage, useIntl } from "react-intl";

const SallaPay = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="pay-card">
        <div className="pay-details">
          <h4>السعر</h4>
          <p>25 ر.س</p>
        </div>

        <div className="pay-options">
          <h4>سعر الشحن و التوصيل</h4>
          <form>
            <div className="form-group">
              <label>
                <input class="form-check-input" type="radio" />
                <span>شحن موحد</span>
              </label>
            </div>
            <div className="form-group">
              <label>
                <input class="form-check-input" type="radio" />
                <span>شحن موحد</span>
              </label>
            </div>

            <h6>الشحن المجاني داخل جدة</h6>
          </form>
        </div>

        <div className="total-pay">
          <h3>المجموع</h3>
          <p>100 ر.س</p>
        </div>

        <Link href="/checkout">
          <a className="pay-btn">إتمام الطلب</a>
        </Link>
      </div>
    </>
  );
};

export default SallaPay;

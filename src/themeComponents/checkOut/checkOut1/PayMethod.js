import React from "react";
import { FormattedMessage } from "react-intl";

const PayMethod = () => {
  return (
    <>
      <div className="pay-methods">
        <h4><FormattedMessage id="payment"/></h4>
        <div className="pay-options">
          <form>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    className="form-check-input custom-radio"
                  />
                  <span>تحويل بنكى</span>
                </label>
                <div className="pay-tooltip">
                  <div className="triangle-up"></div>
                  <p>
                    قم بالدفع مباشرة إلى حسابنا المصرفي. يرجى استخدام معرف الطلب
                    الخاص بك كمرجع للدفع. لن يتم شحن طلبك حتى يتم تصفية الأموال
                    في حسابنا.
                  </p>
                </div>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    className="form-check-input custom-radio"
                  />
                  <span>دفع شيك</span>
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    className="form-check-input custom-radio"
                  />
                  <span>فيزا كارد</span>
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    className="form-check-input custom-radio"
                  />
                  <span>دفع عند الاستلام</span>
                </label>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
};

export default PayMethod;

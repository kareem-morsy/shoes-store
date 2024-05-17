import React from "react";
import { FormattedMessage } from "react-intl";

const Voucher = () => {
  return (
    <>
      <div className="voucher-section">
        <div className="voucher-title">
          <h4><FormattedMessage id="haveVoucher"/></h4>
          <p><FormattedMessage id="useVoucher"/></p>
        </div>

        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="ادخل القسيمة"
            />
          </div>

          <button type="submit"><FormattedMessage id="activatebttn"/></button>
        </form>
      </div>
    </>
  );
};

export default Voucher;

import React from "react";
import { FormattedMessage } from "react-intl";

const AccountInfo = () => {
  return (
    <>
      <div className="account-info">
        <div className="log-in-out">
          <h4>
            <FormattedMessage id="welcome"/>
            <span>Ejadah</span>
            </h4>
          <button>
            <FormattedMessage id="logout"/>
          </button>
        </div>

        <p>
          من لوحة معلومات حسابك ، يمكنك عرض طلباتك الأخيرة ، وإدارة عناوين الشحن
          والفوترة ، وتعديل كلمة المرور وتفاصيل الحساب.
        </p>

        <div className="stop-account">
          <button>
            <FormattedMessage id="deactivate"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default AccountInfo;

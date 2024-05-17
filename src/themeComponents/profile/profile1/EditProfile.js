import React from "react";
import userImage from "./assets/images/userimage.png";
import Close from "./assets/images/close.svg";
import Image from "next/future/image";
import { FormattedMessage, useIntl } from "react-intl";

const EditProfile = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="edit-profile">
        <form>
          <div className="form-user-img">
            <label>الصورة الشخصية</label>
            <div className="form-img">
              <Image src={userImage} alt="user-img" />
              <button>
                <Close />
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <FormattedMessage id="userName" />*
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder={formatMessage({
                  id: "userName",
                })}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <FormattedMessage id="email" />*
            </label>
            <div>
              <input
                type="email"
                className="form-control"
                placeholder={formatMessage({
                  id: "email",
                })}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <FormattedMessage id="phone" />*
            </label>
            <div>
              <input
                type="tel"
                className="form-control"
                placeholder={formatMessage({
                  id: "phone",
                })}
              />
            </div>
          </div>

          <div className="submit-button">
            <button>
              <FormattedMessage id="confirmInfo" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfile;

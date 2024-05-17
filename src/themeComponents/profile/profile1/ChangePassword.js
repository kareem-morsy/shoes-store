import React , {useState} from "react";
import { FormattedMessage } from "react-intl";
import PasswordIcon from "./assets/images/passwordIcon.svg";

const ConfimPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="edit-profile">
        <form>
          <div className="form-group">
            <label className="form-label">
              <FormattedMessage id="currentPass" />*
            </label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                onChange={handlePasswordChange}
              />
              <button
                onClick={handleShowPasswordToggle}
                className="show-password-btn"
                type="button"
              >
                <PasswordIcon />
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <FormattedMessage id="newPass" />*
            </label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                onChange={handlePasswordChange}
              />
              <button
                onClick={handleShowPasswordToggle}
                className="show-password-btn"
                type="button"
              >
                <PasswordIcon />
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              <FormattedMessage id="confirmnewpass" />*
            </label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                onChange={handlePasswordChange}
              />
              <button
                onClick={handleShowPasswordToggle}
                className="show-password-btn"
                type="button"
              >
                <PasswordIcon />
              </button>
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

export default ConfimPassword;

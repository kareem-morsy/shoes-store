import style from "./styles/LoginForm.module.scss";
import loginImg from "./assets/images/loginImg.png";
import Image from "next/future/image";
import Link from "next/link";
import Fackbook from "./assets/images/facebook.svg";
import Google from "./assets/images/google.svg";
import PasswordIcon from "./assets/images/passwordIcon.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { FormattedMessage } from "react-intl";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className={style.loginForm}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="login-form-details">
                <div className="login-text">
                  <h3>
                    <FormattedMessage id="logintitle" />
                  </h3>
                  <p className="login-text">
                    <FormattedMessage id="loginWith" />
                  </p>
                </div>

                <div className="social-login">
                  <Link href="/">
                    <a className="facebook-login">
                      <span>
                        <Fackbook />
                      </span>
                      <FormattedMessage id="facebook" />
                    </a>
                  </Link>

                  <Link href="/">
                    <a className="google-login">
                      <span>
                        <Google />
                      </span>
                      <FormattedMessage id="google" />
                    </a>
                  </Link>
                </div>

                <div className="or">
                  <p>أو</p>
                </div>

                <div className="form-inputs">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label>
                        <FormattedMessage id="mailOrPhone" />
                      </label>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        className="form-control"
                      />
                      {errors?.email && (
                        <p className="error-message">
                          <FormattedMessage id="checkErrors" />
                        </p>
                      )}
                    </div>

                    <div className="form-group">
                      <label>
                        <FormattedMessage id="password" />
                      </label>
                      <div>
                        <input
                          type={showPassword ? "text" : "password"}
                          {...register("password", { required: true })}
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
                      {errors?.password && (
                        <p className="error-message">
                          <FormattedMessage id="checkErrors" />
                        </p>
                      )}
                    </div>

                    <div className="form-group">
                      <div className="remember">
                        {/* <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckChecked"
                          >
                            <FormattedMessage id="remember" />
                          </label>
                        </div> */}
                        <div className="remmeber-label">
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider"></span>
                        </label>

                        <p>تذكرنى</p>

                        </div>

                        <Link href="/forget-password">
                          <a className="forget-password-link">
                            <FormattedMessage id="forgetPass" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="form-group">
                      <button className="btn" type="submit">
                        <FormattedMessage id="loginBtn" />
                      </button>
                    </div>
                  </form>
                </div>

                <div className="new-account">
                  <p>
                    <FormattedMessage id="haveAcc" />
                  </p>
                  <Link href="/register">
                    <a>
                      <FormattedMessage id="newLogin" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="login-form-img">
                <Image src={loginImg} alt="login-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;

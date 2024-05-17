import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/future/image";
import style from "./styles/Style.module.scss";
import changePassImg from "./assets/images/changePassImg.png";
import PasswordIcon from "./assets/images/passwordIcon.svg";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const ActivatePass = () => {
  return (
    <>
      <section className={style.changePassword}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="login-form-details">
                <h3>
                  <FormattedMessage id="activatePass" />
                </h3>
                <p className="login-text">
                  ادخل الرقم المرسل إليك عبر رقم الهاتف (+966) 978 5658 688
                </p>

                <div className="activate-section">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                </div>

                <div className="repeat-activate">
                  <p>أرسل الكود ؟</p>
                  <button className="repeat-bttn">أرسل الكود مرة أخري</button>
                </div>

                <button className="btn">
                  <FormattedMessage id="activate" />
                </button>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="login-form-img">
                <Image src={changePassImg} alt="login-img" priority />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActivatePass;

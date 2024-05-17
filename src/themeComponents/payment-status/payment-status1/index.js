import React from "react";
import order from "./assets/order.png"
import style from "./styles/Style.module.scss";
import Image from "next/future/image";
import { FormattedMessage } from "react-intl";
import Link from "next/link";


const SucessOrder = () => {
  return (
    <>
      <section className={style.SucessOrder}>
        <div className="container">
          <div className="order">
            <div className="order-img">
              <Image src={order} alt="order" />
            </div>
            <h4>شكرًا لك. تم استلام طلبك.</h4>
            <p>شكرا لطلبك! تتم معالجة طلبك وسيكتمل في غضون 3-6 ساعات.</p>
            <p> ستتلقى تأكيدًا عبر البريد الإلكتروني عند اكتمال طلبك.</p>

            <div className="order-links">
              <Link href="/">
                <a className="home-link">العودة للرئيسية</a>
              </Link>

              <Link href="/">
                <a className="pay-link">الفاتورة</a>
              </Link>
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default SucessOrder;

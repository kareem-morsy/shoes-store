import Location from "./assets/images/location.svg";
import Sms from "./assets/images/sms.svg";
import Call from "./assets/images/call.svg";
import Link from "next/link";
import { FormattedMessage } from "react-intl";

const ContactDetails = () => {
  return (
    <>
      <div className="contact-details">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="contact-details-card">
              <div className="card-icon">
                <Sms />
              </div>
              <div className="card-content">
                <h5>
                  <FormattedMessage id="email" />
                </h5>
                <div className="card-links">
                  <Link href="/">
                    <a>example@example.com</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="contact-details-card">
              <div className="card-icon">
                <Location />
              </div>
              <div className="card-content">
                <h5>
                  <FormattedMessage id="address" />
                </h5>
                <p>
                  شارع الامير محمد بن عبد العزيز . مركز الحجاز 2 .جدة صيرفى
                  بجوار ميجا مول
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 col-12">
            <div className="contact-details-card">
              <div className="card-icon">
                <Call />
              </div>
              <div className="card-content">
                <h5>
                  <FormattedMessage id="phone" />
                </h5>

                <div className="card-links">
                  <Link href="tel:996 26589 068">
                    <a>996 26589 068</a>
                  </Link>

                  <Link href="tel:996 26589 068">
                    <a>996 26589 068</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;

import Link from "next/link";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import LocationModal from "./LocationModal";
import { FormattedMessage } from "react-intl";

const LocationSection = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="locations-section">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="location-card">
              <h5><FormattedMessage id="mainAddress"/></h5>

              <div className="location-card-details">
                <p className="card-label">الاسم</p>
                <p className="card-details">محمد ابراهيم</p>
              </div>

              <div className="location-card-details">
                <p className="card-label">الدولة</p>
                <p className="card-details">السعودية</p>
              </div>

              <div className="location-card-details">
                <p className="card-label">المدينة</p>
                <p className="card-details">الرياض</p>
              </div>

              <div className="location-card-details">
                <p className="card-label">المحافظة</p>
                <p className="card-details">الرياض</p>
              </div>

              <div className="location-card-details">
                <p className="card-label">العنوان</p>
                <p className="card-details">
                  شارع المحمدية عمارة 45 الطابق الثانى
                </p>
              </div>

              <div className="location-card-details">
                <p className="card-label">الرقم البريدى</p>
                <p className="card-details">12345</p>
              </div>

              <div className="location-card-details">
                <p className="card-label">رقم الهاتف</p>
                <p className="card-details">0102254521645</p>
              </div>

              <div className="location-card-edits">
                <Link href="/">
                  <a>
                    <FormattedMessage id="edit" />
                  </a>
                </Link>

                <button>
                  <FormattedMessage id="remove" />
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="location-card">
              <h5><FormattedMessage id="address2"/></h5>

              <div className="location-card-details">
                <p className="card-label">الاسم</p>
                <p className="card-details">محمد ابراهيم</p>
              </div>

              <div className="location-card-details">
                <p className="card-label">الدولة</p>
                <p className="card-details">السعودية</p>
              </div>

              <div className="location-card-details">
                <p className="card-label">المدينة</p>
                <p className="card-details">الرياض</p>
              </div>

              <div className="location-card-details">
                <p className="card-label">المحافظة</p>
                <p className="card-details">الرياض</p>
              </div>

              <div className="location-card-details">
                <p className="card-label">العنوان</p>
                <p className="card-details">
                  شارع المحمدية عمارة 45 الطابق الثانى
                </p>
              </div>

              <div className="location-card-details">
                <p className="card-label">الرقم البريدى</p>
                <p className="card-details">12345</p>
              </div>

              <div className="location-card-details">
                <p className="card-label">رقم الهاتف</p>
                <p className="card-details">0102254521645</p>
              </div>

              <div className="location-card-edits">
                <Link href="/">
                  <a>
                    <FormattedMessage id="edit" />
                  </a>
                </Link>

                <button>
                  <FormattedMessage id="remove" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="add-new-location">
          <Button onClick={() => setModalShow(true)}><FormattedMessage id="AddNewAddress"/></Button>

          <LocationModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </>
  );
};

export default LocationSection;

import React from "react";
import { FormattedMessage } from "react-intl";
import Edit from "./assets/images/edit.svg";

const AddressContainer = () => {
  return (
    <>
      <div className="address-container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="address-card active">
              <div className="address-title">
                <h4>محمد ابراهيم</h4>
                <button>
                  <Edit />
                </button>
              </div>

              <p>شارع قناه السويس Shebin El Koum/Al Menofiah</p>
              <div className="government">
                <h5>الغربية</h5>
                <h5>الرياض</h5>
              </div>

              <div className="telephone">
                <p>20 127*******76</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="address-card">
              <div className="address-title">
                <h4>محمد ابراهيم</h4>
                <button>
                  <Edit />
                </button>
              </div>

              <p>شارع قناه السويس Shebin El Koum/Al Menofiah</p>
              <div className="government">
                <h5>الغربية</h5>
                <h5>الرياض</h5>
              </div>

              <div className="telephone">
                <p>20 127*******76</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressContainer;

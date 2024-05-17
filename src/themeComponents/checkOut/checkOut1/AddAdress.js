import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { FormattedMessage } from "react-intl";

function AddAdress() {
  // const [open, setOpen] = useState(true);
  const [isDivVisible, setDivVisible] = useState(false);

  const handleToggle = () => {
    setDivVisible(!isDivVisible);
  };

  return (
    <>
      <div className="address-indicator">
        <label class="switch">
          <input type="checkbox" onChange={handleToggle} />
          <span class="slider round"></span>
        </label>

        <p><FormattedMessage id="anotherAddress"/></p>
      </div>

      {isDivVisible && (
        <div id="address">
          <div className="add-address-details">
            <h4><FormattedMessage id="shippingDetail"/></h4>
            <form>
              <div className="row">
                <div className="col-md-6 col-12">
                  <label>
                    <FormattedMessage id="firstName"/>
                    <span className="symbol">*</span>
                  </label>
                  <input type="" placeholder="" className="form-control" />
                </div>

                <div className="col-md-6 col-12">
                  <label>
                    <FormattedMessage id="secondName"/>
                    <span className="symbol">*</span>
                  </label>
                  <input type="" placeholder="" className="form-control" />
                </div>

                <div className="col-12">
                  <label>اسم الشركة (اختيارى)</label>
                  <input type="" placeholder="" className="form-control" />
                </div>

                <div className="col-md-6 col-12">
                  <label>
                    عنوان المنزل
                    <span className="symbol">*</span>
                  </label>
                  <input type="" placeholder="" className="form-control" />
                </div>

                <div className="col-md-6 col-12">
                  <label>رقم الهاتف</label>
                  <input type="" placeholder="" className="form-control" />
                </div>

                <div className="col-md-6 col-12">
                  <label>رقم الهاتف</label>
                  <select className="form-control">
                    <option>هنا يتم اختيار المحافظة</option>
                  </select>
                </div>

                <div className="col-md-6 col-12">
                  <label>رقم الهاتف</label>
                  <select className="form-control">
                    <option>هنا يتم اختيار المحافظة</option>
                  </select>
                </div>

                <div className="col-12">
                  <label>أضف ملاحظة</label>
                  <textarea className="form-control" placeholder=""></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddAdress;

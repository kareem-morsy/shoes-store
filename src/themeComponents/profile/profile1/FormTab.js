import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
const FormTab = () => {
  return (
    <>
      <div className="account-form-tab">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">الاسم الاول *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="الاسم الاول"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">اسم العائلة *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="اسم العائلة"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">الـهاتف *</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="اسم العائلة"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">البريد الالكترونى *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="البريد الالكترونى"
                />
              </div>
            </div>

            <h4>الجنس :</h4>

            <div className="col-md-6">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  ذكر
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  انثى
                </label>
              </div>
            </div>

            <h4>تعديل كلمة المرور</h4>

            <div className="col-md-12">
              <div className="form-group">
                <label className="form-label">كلمة المرور الحالية *</label>
                <input type="password" className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">كلمة المرور الجديدة *</label>
                <input type="password" className="form-control" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label className="form-label">كلمة المرور الجديدة مرة اخرى*</label>
                <input type="password" className="form-control" />
              </div>
            </div>
          </div>

          <button type="submit" className="submit-bttn">
            حفظ
          </button>
        </form>
      </div>
    </>
  );
};

export default FormTab;

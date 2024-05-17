import AddAdress from "./AddAdress";
import AddressContainer from "./AddressContainer";
import PayMethod from "./PayMethod";
import SallaPay from "./SallaPay";
import Voucher from "./Voucher";
import style from "./styles/CheckOut.module.scss";

const CheckOut = () => {
  return (
    <>
      <div className={style.CheckSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-12">
              <Voucher/>
              <AddressContainer/>
              <AddAdress/>
              <PayMethod/>
            </div>

            <div className="col-md-4 col-12">
              <SallaPay />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

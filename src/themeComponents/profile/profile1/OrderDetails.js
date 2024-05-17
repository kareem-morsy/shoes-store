import Image from "next/future/image";
import glass1 from "./assets/images/glass1.png";
import glass2 from "./assets/images/glass2.png";

const OrderDetails = () => {
  return (
    <>
      <div className="order-details">
        <div className="order-full-info">
          <div className="order-header">
            <div className="order-header-element">
              <p>رقم الطلب</p>
              <h5>O7C2sbCYu</h5>
            </div>

            <div className="order-header-element">
              <p>التاريخ</p>
              <h5>20-11-2022</h5>
            </div>

            <div className="order-header-element">
              <p>الحالة</p>
              <h5>تم الدفع</h5>
            </div>

            <div className="order-header-element">
              <p>الإجمالي</p>
              <h5>12124 ر.س</h5>
            </div>

            <div className="order-header-element">
              <p>وسيلة الدفع</p>
              <h5>ميسير</h5>
            </div>
          </div>

          <div className="order-num-details">
            <h6 className="order-num">
              منتجات
              <span>(2)</span>
            </h6>

            <div className="order-num-info">
                <div className="order-num-info-img">
                    <Image src={glass1} alt="product-img"/>
                </div>

                <div className="order-quantity">
                    <h4>X 12</h4>
                    <p>ر.س</p>

                </div>
            </div>

            <div className="order-num-info">
                <div className="order-num-info-img">
                    <Image src={glass2} alt="product-img"/>
                </div>

                <div className="order-quantity">
                    <h4>X 12</h4>
                    <p>ر.س</p>

                </div>
            </div>


          </div>
        </div>


        <div className="order-summary">
            <div className="summary-head">
                <h4>ملخص الطلب</h4>

            </div>

            <div className="summary-info">
                <div className="summary-info-element">
                    <h5>ر.س</h5>
                </div>

                <div className="summary-info-element">
                    <h5>ر.س</h5>
                </div>

                <div className="summary-info-element">
                    <h5>المجموع الفرعى</h5>
                    <p>12124 ر.س</p>
                </div>

                <div className="summary-info-element">
                    <h5>الاجمالى</h5>
                    <p>12124 ر.س</p>
                </div>
                
            </div>

            
        </div>





      </div>
    </>
  );
};

export default OrderDetails;

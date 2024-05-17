import Image from "next/future/image";
import product1 from "./assets/images/product1.png";
import product2 from "./assets/images/product2.png";
import Close from "./assets/images/Close.svg";
import { FormattedMessage } from "react-intl";

const SallaTable = () => {
  return (
    <>
      <div className="table-responsive">
        <table className="table">
          <thead className="table">
            <tr className="row1">
              <th></th>
              <th>المنتج</th>
              <th>السعر</th>
              <th>العدد</th>
              <th>المقاس</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button className="close-icon">
                  <Close />
                </button>
              </td>
              <td className="product-details">
                <div className="product-img">
                  <Image src={product1} alt="product-img" />
                </div>
                <div className="product-content">
                  <h6>ملابس رياضيات</h6>
                  <p>#96d6DS</p>
                </div>
              </td>

              <td className="price">300 ر.س</td>
              <td>
                <div className="counter">
                  <button>+</button>
                  <span>1</span>
                  <button>-</button>
                </div>
              </td>

              <td className="size">7.5</td>
            </tr>

            <tr>
              <td>
                <button className="close-icon">
                  <Close />
                </button>
              </td>
              <td className="product-details">
                <div className="product-img">
                  <Image src={product2} alt="product-img" />
                </div>
                <div className="product-content">
                  <h6>ملابس رياضيات</h6>
                  <p>#96d6DS</p>
                </div>
              </td>

              <td className="price">300 ر.س</td>
              <td>
                <div className="counter">
                  <button>+</button>
                  <span>1</span>
                  <button>-</button>
                </div>
              </td>

              <td className="size">7.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SallaTable;

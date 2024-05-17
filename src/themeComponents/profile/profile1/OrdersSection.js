import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

const OrdersSection = () => {
  return (
    <>
      <div className="order-section table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">
                <FormattedMessage id="orderID" />
              </th>
              <th scope="col">
                <FormattedMessage id="date" />
              </th>
              <th scope="col">
                <FormattedMessage id="status" />
              </th>
              <th scope="col">
                <FormattedMessage id="total" />
              </th>
              <th scope="col">
                <FormattedMessage id="show" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="order-title">
                  <h5>حذاء رياضي ( اديداس )</h5>
                  <p>#96d6DS</p>
                </div>
              </td>
              <td>15/5/2022</td>
              <td>جارى الشحن</td>
              <td>
                <span>80 رس</span>
                <span>2 منتج</span>
              </td>
              <td>
                <Link href="profile/orders/orders-details">
                  <a className="show-order-btn">
                    <FormattedMessage id="showOrder" />
                  </a>
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <div className="order-title">
                  <h5>حذاء رياضي ( اديداس )</h5>
                  <p>#96d6DS</p>
                </div>
              </td>
              <td>15/5/2022</td>
              <td>جارى الشحن</td>
              <td>
                <span>80 رس</span>
                <span>2 منتج</span>
              </td>
              <td>
                <Link href="profile/orders/orders-details">
                  <a className="show-order-btn">
                    <FormattedMessage id="showOrder" />
                  </a>
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <div className="order-title">
                  <h5>حذاء رياضي ( اديداس )</h5>
                  <p>#96d6DS</p>
                </div>
              </td>
              <td>15/5/2022</td>
              <td>جارى الشحن</td>
              <td>
                <span>80 رس</span>
                <span>2 منتج</span>
              </td>
              <td>
                <Link href="profile/orders/orders-details">
                  <a className="show-order-btn">
                    <FormattedMessage id="showOrder" />
                  </a>
                </Link>
              </td>
            </tr>

            <tr>
              <td>
                <div className="order-title">
                  <h5>حذاء رياضي ( اديداس )</h5>
                  <p>#96d6DS</p>
                </div>
              </td>
              <td>15/5/2022</td>
              <td>جارى الشحن</td>
              <td>
                <span>80 رس</span>
                <span>2 منتج</span>
              </td>
              <td>
                <Link href="profile/orders/orders-details">
                  <a className="show-order-btn">
                    <FormattedMessage id="showOrder" />
                  </a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersSection;

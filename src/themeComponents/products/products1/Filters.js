import { FormattedMessage } from "react-intl";
import Close from "./assets/images/close.svg";

const Filters = (props) => {
  return (
    <>
      <div
        className={`filter-section ${
          props.sideBarShow ? "filterToggle" : ""
        }`}
      >
        <form>
          <div className="form-head">
            <h4><FormattedMessage id="filters"/></h4>
            <button
              className="filter-reset-button"
              type="button"
              onClick={() => console.log("reset")}
            >
              <FormattedMessage id="reset" />
            </button>

            <button
              className="filter-close-button"
              type="button"
              onClick={props.toggleClass}
            >
              <Close />
            </button>
          </div>

          <div className="filter-categorys">
            <div className="filter-category filters-mobile">
              <ul className="filter-list">
                <li>
                  <label>
                    <input type="checkbox" />
                    <span>الرجال</span>
                  </label>
                  <span>(17)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>النساء</span>
                  </label>
                  <span>(12)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>الأطفال</span>
                  </label>
                  <span>(54)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>أحذية</span>
                  </label>
                  <span>(45)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>شنط</span>
                  </label>
                  <span>(2)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>ساعات</span>
                  </label>
                  <span>(55)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>رياضة</span>
                  </label>
                  <span>(68)</span>
                </li>
              </ul>
            </div>

            <div className="filter-category">
              <h4><FormattedMessage id="brands"/></h4>
              <ul className="filter-list">
                <li>
                  <label>
                    <input type="checkbox" />
                    <span>Shovia</span>
                  </label>
                  <span>(17)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>Fusion</span>
                  </label>
                  <span>(12)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>Hunter Shoes</span>
                  </label>
                  <span>(54)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>Club Shoes</span>
                  </label>
                  <span>(42)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>Hoppister</span>
                  </label>
                  <span>(2)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>Blaze Fashion</span>
                  </label>
                  <span>(55)</span>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>Elegance</span>
                  </label>
                  <span>(68)</span>
                </li>
              </ul>
            </div>

            <div className="filter-category">
              <h4><FormattedMessage id="price"/></h4>
              <ul className="filter-list">
                <li>
                  <label>
                    <input type="checkbox" />
                    <span>Under $50</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>$50 to $100</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>$100 to $150</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>$150 to $200</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>$200 to $300</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>$300 to $500</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>$500 to $1000</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span>Over $1000</span>
                  </label>
                </li>
              </ul>
            </div>

            <div className="filter-category">
              <h4><FormattedMessage id="colors"/></h4>
              <ul className="filter-list">
                <li>
                  <label>
                    <input type="checkbox" />
                    <span
                      className="color-span"
                      style={{ backgroundColor: "#000" }}
                    ></span>
                    <span className="color-name">Black</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span
                      className="color-span"
                      style={{ backgroundColor: "#3310CE" }}
                    ></span>
                    <span className="color-name">Blue</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span
                      className="color-span"
                      style={{ backgroundColor: "#0C7448;" }}
                    ></span>
                    <span className="color-name">Olive</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span
                      className="color-span"
                      style={{ backgroundColor: "#5F0E0E" }}
                    ></span>
                    <span className="color-name">Maroon</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span
                      className="color-span"
                      style={{ backgroundColor: "#FFFFFF" }}
                    ></span>
                    <span className="color-name">White</span>
                  </label>
                </li>

                <li>
                  <label>
                    <input type="checkbox" />
                    <span
                      className="color-span"
                      style={{ backgroundColor: "#D4D4D4" }}
                    ></span>
                    <span className="color-name">Gray</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filters;

import style from "./styles/Products.module.scss";
import Form from "react-bootstrap/Form";
import Grid from "./assets/images/grid.svg";
import Collection from "./assets/images/collection.svg";
import Link from "next/link";
import { useState } from "react";
import Filters from "./Filters";
import { productsData } from "../../../../data";
import ProductCard from "./ProductCard";
import ProductCardColumn from "./ProductCardHorizontal";
import { FormattedMessage } from "react-intl";
import Filter from "./assets/images/filters.svg";
import Close from "./assets/images/close.svg";
import Prev from "./assets/images/prev.svg";
import Next from "./assets/images/Next.svg";

const Products = () => {
  const [shapeView, setShapeView] = useState(true);
  const [sideBarShow, setSideBarShow] = useState(false);

  const toggleClass = () => {
    setSideBarShow(!sideBarShow);
  };

  const ButtonClick = () => {
    setShapeView(!shapeView);
  };

  const renderProductsColumn = productsData?.map((product, index) => {
    return <ProductCardColumn product={product} key={index} />;
  });

  return (
    <>
      <div className={style.productsSection}>
        <div className="filter-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12">
              <Filters sideBarShow={sideBarShow} toggleClass={toggleClass} />
            </div>

            <div className="col-lg-9 col-12">
              <div className="container">
                <div className="products-filter-show">
                  <div className="product-show-head">
                    <div className="mob-show">
                      <h4>
                        <FormattedMessage id="products" />
                      </h4>
                      <button
                        type="button"
                        className="mob-categories"
                        onClick={toggleClass}
                      >
                        <Filter />
                      </button>
                    </div>
                    <div className="grid-show">
                      <p>
                        <FormattedMessage id="show" />
                      </p>
                      <div className="grid-show-btns">
                        <button onClick={() => setShapeView(true)}>
                          <Collection />
                        </button>
                        <button onClick={() => setShapeView(false)}>
                          <Grid />
                        </button>
                      </div>
                    </div>

                    <div className="show-num">
                      <p>
                        <FormattedMessage id="watch" />
                      </p>
                      <div className="show-num-bttns">
                        <button>6</button>
                        <button>12</button>
                        <button>18</button>
                        <button>24</button>
                        <button>30</button>
                      </div>
                    </div>

                    <div className="product-sort">
                      <p>
                        <FormattedMessage id="orderWith" />
                      </p>
                      <Form.Select aria-label="Default select example">
                        <option value="1" className="sort-option">
                          الاقل سعرا
                        </option>
                        <option value="2" className="sort-option">
                          الأعلى سعرا
                        </option>
                        <option value="3" className="sort-option">
                          نوع المنتج
                        </option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                {shapeView ? (
                  <div className="products-cards-grid">
                    <div className="row">
                      {productsData?.map((product, index) => {
                        return (
                          <div className="col-xl-4 col-md-6 col-12" key={index}>
                            <ProductCard product={product} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="products-cards-column">
                    <div className="row">{renderProductsColumn}</div>
                  </div>
                )}

                <div className="pagination-section">
                  <nav aria-label="...">
                    <ul class="pagination">
                      <li class="page-item">
                        <span class="page-link prev-link"><Prev/></span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li class="page-item ">
                        <a class="page-link next-link" href="#">
                          <Next/>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

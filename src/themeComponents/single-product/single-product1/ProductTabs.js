import Image from "next/future/image";
import product4 from "./assets/images/product4.png";
import product5 from "./assets/images/product5.png";
import userImage from "./assets/images/user.png";
import Rate from "rc-rate";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

const ProductTabs = () => {
  const { formatMessage } = useIntl();
  const [rate, setRate] = useState(0);
  return (
    <>
      <div className="product-details-tabs">
        <Tabs defaultActiveKey="desc" id="fill-tab-example" className="mb-3">
          <Tab eventKey="desc" title={<FormattedMessage id="description" />}>
            <div className="container">
              <div className="tab-description">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="tab-desc-content">
                      <h4>عنوان مميز لوصف المنتج .</h4>
                      <p>
                        شوز ستور: يوفر لك الآن الوصول الى أحدث تشكيلات الأحذية
                        العالمية من حول العالم من خلال شوز ستور! لدينا الأحذية
                        للرجال والنساء، وتضمن لك أسعار مقبولة وجودة عالية. يمكن
                        لك الآن الاستفادة من العروض الخاصة التي يقدمها لك شوز
                        ستور لتجد الأحذية التي تناسب حالتك ومي
                      </p>
                      <p>
                        شوز ستور: يوفر لك الآن الوصول الى أحدث تشكيلات الأحذية
                        العالمية من حول العالم من خلال شوز ستور! لدينا الأحذية
                        للرجال والنساء، وتضمن لك أسعار مقبولة وجودة عالية. يمكن
                        لك الآن الاستفادة من العروض الخاصة التي يقدمها لك شوز
                        ستور لتجد الأحذية التي تناسب حالتك ومي
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="tab-desc-img">
                      <Image src={product4} alt="Image" />
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="tab-desc-img">
                      <Image src={product5} alt="Image" />
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="tab-desc-content">
                      <h4>عنوان مميز لوصف المنتج .</h4>
                      <p>
                        شوز ستور: يوفر لك الآن الوصول الى أحدث تشكيلات الأحذية
                        العالمية من حول العالم من خلال شوز ستور! لدينا الأحذية
                        للرجال والنساء، وتضمن لك أسعار مقبولة وجودة عالية. يمكن
                        لك الآن الاستفادة من العروض الخاصة التي يقدمها لك شوز
                        ستور لتجد الأحذية التي تناسب حالتك ومي
                      </p>
                      <p>
                        شوز ستور: يوفر لك الآن الوصول الى أحدث تشكيلات الأحذية
                        العالمية من حول العالم من خلال شوز ستور! لدينا الأحذية
                        للرجال والنساء، وتضمن لك أسعار مقبولة وجودة عالية. يمكن
                        لك الآن الاستفادة من العروض الخاصة التي يقدمها لك شوز
                        ستور لتجد الأحذية التي تناسب حالتك ومي
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="comments" title={<FormattedMessage id="comments" />}>
            <div className="comments-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="actual-comment">
                      <div className="comment-details">
                        <div className="comment-user">
                          <div className="user-img">
                            <Image src={userImage} alt="" />
                          </div>

                          <div className="user-details">
                            <h5>مروة عبد الرحمن</h5>
                            <p> September 2, 2019</p>
                          </div>
                        </div>

                        <div className="stars">
                          <Rate value={3.5} allowHalf="true" disabled />
                        </div>
                      </div>

                      <div className="comment-desc">
                        <p>
                          ماركة جميلة ومعروفة والمنتج اصلى والتوصيل ممتاز وصل فى
                          الميعاد مظبوط
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="actual-comment">
                      <div className="comment-details">
                        <div className="comment-user">
                          <div className="user-img">
                            <Image src={userImage} alt="" />
                          </div>

                          <div className="user-details">
                            <h5>مروة عبد الرحمن</h5>
                            <p> September 2, 2019</p>
                          </div>
                        </div>

                        <div className="stars">
                          <Rate value={3.5} allowHalf="true" disabled />
                        </div>
                      </div>

                      <div className="comment-desc">
                        <p>
                          ماركة جميلة ومعروفة والمنتج اصلى والتوصيل ممتاز وصل فى
                          الميعاد مظبوط
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="add-comment-title">
                  قم بإضافة تعليق أو وصف عن تجربتك للـمنتج
                </h3>

                <div className="add-comment">
                  <div className="add-header">
                    <p>
                      التقييم
                    </p>

                    <div className="stars">
                      <Rate
                        defaultValue={0}
                        onChange={(value) => setRate(value)}
                        value={rate}
                        allowHalf="true"
                      />
                    </div>
                  </div>

                  <div className="add-form">
                    <form>
                      <div className="row">
                        <div className="col-md-6 col-12">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="text"
                              placeholder={formatMessage({
                                id: "userName",
                              })}
                            />
                          </Form.Group>
                        </div>

                        <div className="col-md-6 col-12">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              type="email"
                              placeholder={formatMessage({
                                id: "email",
                              })}
                            />
                          </Form.Group>
                        </div>

                        <div className="col-12">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Control
                              as="textarea"
                              rows={5}
                              placeholder={formatMessage({
                                id: "addMessage",
                              })}
                            />
                          </Form.Group>
                        </div>
                      </div>

                      <div className="add-submit">
                        <Button type="submit">أضف تعليق</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default ProductTabs;

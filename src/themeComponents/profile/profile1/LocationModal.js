import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import style from "./styles/Profile.module.scss";
import { FormattedMessage, useIntl } from "react-intl";

const LocationModal = (props) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Modal
        className={style.locationModal}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="add-modal">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <FormattedMessage id="fullName" />
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={formatMessage({
                    id: "fullName",
                  })}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  <FormattedMessage id="country" />
                </Form.Label>
                <Form.Select size="lg">
                  <option>اختر الدولة</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      <FormattedMessage id="city" />
                    </Form.Label>
                    <Form.Select size="lg">
                      <option>اختر المدينة</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      <FormattedMessage id="government" />
                    </Form.Label>
                    <Form.Select size="lg">
                      <option>اختر المحافظة</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>
                  <FormattedMessage id="address" />
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder={formatMessage({
                    id: "address",
                  })}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <FormattedMessage id="postalCode" />
                    </Form.Label>
                    <Form.Control type="text" placeholder={formatMessage({
                    id: "postalCode",
                  })} />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <FormattedMessage id="phone" />
                    </Form.Label>
                    <Form.Control type="tel" placeholder={formatMessage({
                    id: "phone",
                  })} />
                  </Form.Group>
                </Col>
              </Row>

              <div className="modal-submit">
                <button type="submit">
                  <FormattedMessage id="AddNewAddress" />
                </button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LocationModal;

import Image from "next/future/image";
import formImg from "./assets/images/form-img.png";
import { FormattedMessage, useIntl } from "react-intl";
const ContactForm = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="contact-form">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="contact-form-details">
              <div className="title">
                <h2><FormattedMessage id="contactUs"/></h2>
              </div>
              <p>
                هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو
                وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال
                نصاً بديلاً ومؤقتاً.
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={formatMessage({
                      id: "fullName",
                    })}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder={formatMessage({
                      id: "email",
                    })}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder={formatMessage({
                      id: "phone",
                    })}
                  />
                </div>

                <button type="submit">
                  <FormattedMessage id="sendBtn" />
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7455039.775340255!2d49.56762805475765!3d24.16625624451223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2z2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1659514550341!5m2!1sar!2seg"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

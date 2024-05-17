import style from "./styles/Contact.module.scss";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const ContactUs = () => {
  return (
    <>
      <section className={style.contactUs}>
        
        <div className="container">
          <ContactDetails/>
          <ContactForm/>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

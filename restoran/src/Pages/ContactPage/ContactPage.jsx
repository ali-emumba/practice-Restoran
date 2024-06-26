import ContactForm from "../../components/Header/ContactForm/ContactForm";
import styles from "./styles.module.css";

const ContactPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading__wrapper}>
        <h1 className={styles.heading__text}>Contact Us</h1>
      </div>
      <div className={styles.content__wrapper}>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;

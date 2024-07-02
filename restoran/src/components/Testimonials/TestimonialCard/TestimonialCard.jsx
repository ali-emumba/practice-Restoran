import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const TestimonialCard = ({ avatar, name, profession, message }) => {
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={faQuoteLeft} className={styles.quotation__mark} />
      <p className={styles.message}>
        {message
          ? message
          : "Dolor et eos labore, stet justo sed estsed. Diam sed sed dolor stet ameteirmod eos labore diam"}
      </p>
      <div className={styles.stats__box}>
        <div className={styles.stats__left}>
          <img src={avatar} alt="client img" className={styles.avatar} />
        </div>
        <div className={styles.stats__text}>
          <h1 className={styles.name}>{name ? name : "Client Name"}</h1>
          <p>{profession ? profession : "Profession"}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

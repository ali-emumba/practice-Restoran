import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ icon, message, name }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default ServiceCard;

import styles from "./styles.module.css";
const ContactCard = ({ title, email, icon }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex__row}>
        <span className={styles.title}>{title}</span>
        <span className={styles.horizontal__divider}></span>
      </div>
      <div className={styles.flex__row}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.email}>{email}</span>
      </div>
    </div>
  );
};

export default ContactCard;

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span>&#169; </span>
        <span className={styles.site__name}>Your Site Name</span>
        <span>, All Rights Reserved.</span>
      </div>
      <div className={styles.links}>
        <span>Home</span>
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Footer;

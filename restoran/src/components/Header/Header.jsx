import styles from "./styles.module.css";
import logo from "../../assets/restoran_logo.png";

const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      <div className={styles.header__left}>
        <img src={logo} alt="resturan company logo" className={styles.logo} />
      </div>
      <div className={styles.header__right}>
        <span>Home</span>
        <span>Contact</span>
        <button>Book A Table</button>
      </div>
    </div>
  );
};

export default Header;

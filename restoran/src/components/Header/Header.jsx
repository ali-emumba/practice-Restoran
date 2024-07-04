import styles from "./styles.module.css";
import logo from "../../assets/restoran_logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import MobileDropDown from "./MobileDropDown/MobileDropDown";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  // mobile menu
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  const location = useLocation();

  // used to active home page or contact page link
  // Check if we are on the home page
  const isHomePage = location.pathname === "/";
  // Check if we are on the contact page
  const isContactPage = location.pathname === "/contact";

  // toggle mobile menu
  const toggleCollapsed = () => {
    setMenuCollapsed(!menuCollapsed);
  };

  return (
    <>
      <nav className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__left}>
            <Link to={"/"}>
              <img
                src={logo}
                alt="resturan company logo"
                className={styles.logo}
              />
            </Link>
          </div>
          <div className={styles.header__right}>
            <HashLink
              smooth
              to={"/#menu-section"}
              className={isHomePage ? styles.active__link : styles.links}
            >
              <span>Home</span>
            </HashLink>
            <Link
              to={"/contact"}
              className={isContactPage ? styles.active__link : styles.links}
            >
              <span>Contact</span>
            </Link>
            <HashLink smooth to={"/#reservation-section"}>
              <button className={styles.book__table__btn}>Book A Table</button>
            </HashLink>
          </div>

          {/* Hamburger menu for mobile */}
          <div className={styles.hamburger__wrapper}>
            <MenuOutlined
              className={styles.hamburger}
              onClick={toggleCollapsed}
            />
          </div>
        </div>
      </nav>
      {!menuCollapsed && (
        <MobileDropDown
          menuCollapsed={menuCollapsed}
          toggleCollapsed={toggleCollapsed}
          isHomePage={isHomePage}
          isContactPage={isContactPage}
        />
      )}
    </>
  );
};

export default Header;

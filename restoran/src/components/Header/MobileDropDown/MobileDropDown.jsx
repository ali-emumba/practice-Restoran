import styles from "./styles.module.css";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MobileDropDown = ({
  menuCollapsed,
  toggleCollapsed,
  isHomePage,
  isContactPage,
}) => {
  return (
    <>
      {/* Dropdown menu for mobile */}
      <Menu
        className={styles.dropdownMenu}
        onClick={toggleCollapsed}
        style={{ display: menuCollapsed ? "none" : "block" }}
      >
        <Menu.Item key="home">
          <HashLink to={"/#menu-section"} smooth>
            <span className={isHomePage ? styles.active__link : styles.links}>
              Home
            </span>
          </HashLink>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to={"/contact"}>
            <span
              className={isContactPage ? styles.active__link : styles.links}
            >
              Contact
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="book" className={styles.mobileBookButton}>
          <HashLink
            smooth
            to={"/#reservation-section"}
            className={isHomePage ? styles.active__link : styles.links}
          >
            <button className={styles.book__table__btn}>Book A Table</button>
          </HashLink>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MobileDropDown;

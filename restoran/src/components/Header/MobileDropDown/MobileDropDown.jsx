import { useState } from "react";
import styles from "./styles.module.css";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";

const MobileDropDown = ({
  menuCollapsed,
  toggleCollapsed,
  isHomePage,
  isContactPage,
}) => {
  // console.log(onContactPage);
  return (
    <>
      {/* Dropdown menu for mobile */}
      <Menu
        className={styles.dropdownMenu}
        onClick={toggleCollapsed}
        style={{ display: menuCollapsed ? "none" : "block" }}
      >
        <Menu.Item key="home">
          <Link to={"/"}>
            <span className={isHomePage ? styles.active__link : styles.links}>
              Home
            </span>
          </Link>
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
          <button className={styles.book__table__btn}>Book A Table</button>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MobileDropDown;

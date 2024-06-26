import { useState } from "react";
import styles from "./styles.module.css";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";

const MobileDropDown = ({
  menuCollapsed,
  toggleCollapsed,
  onHomePage,
  setOnHomePage,
  onContactPage,
  setOnContactPage,
}) => {
  console.log(onContactPage);
  return (
    <>
      {/* Dropdown menu for mobile */}
      <Menu
        className={styles.dropdownMenu}
        onClick={toggleCollapsed}
        style={{ display: menuCollapsed ? "none" : "block" }}
      >
        <Menu.Item key="home">
          <Link
            to={"/"}
            onClick={() => {
              setOnHomePage(true);
              setOnContactPage(false);
            }}
          >
            <span className={onHomePage ? styles.active__link : styles.links}>
              Home
            </span>
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link
            to={"/contact"}
            onClick={() => {
              setOnContactPage(true);
              setOnHomePage(false);
            }}
          >
            <span
              className={onContactPage ? styles.active__link : styles.links}
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

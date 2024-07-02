import styles from "./styles.module.css";
import logo from "../../assets/restoran_logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import MobileDropDown from "./MobileDropDown/MobileDropDown";

const Header = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  const location = useLocation();

  // Check if we are on the home page
  const isHomePage = location.pathname === "/";

  // Check if we are on the contact page
  const isContactPage = location.pathname === "/contact";

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
            <Link
              to={"/"}
              className={isHomePage ? styles.active__link : styles.links}
            >
              <span>Home</span>
            </Link>
            <Link
              to={"/contact"}
              className={isContactPage ? styles.active__link : styles.links}
            >
              <span>Contact</span>
            </Link>
            <button className={styles.book__table__btn}>Book A Table</button>
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

  //   const [collapsed, setCollapsed] = useState(true);

  //   const toggleCollapsed = () => {
  //     setCollapsed(!collapsed);
  //   };

  //   return (
  //     <div className={styles.navbar}>
  //       <div className={styles.logo}>
  //         {/* Replace with your logo */}
  //         <img src="/path/to/logo.png" alt="Logo" />
  //       </div>
  //       <div className={styles.menu}>
  //         <Menu mode="horizontal">
  //           <Menu.Item key="home">Home</Menu.Item>
  //           <Menu.Item key="contact">Contact</Menu.Item>
  //         </Menu>
  //       </div>
  //       <div className={styles.bookButton}>
  //         <Button type="primary">Book a Table</Button>
  //       </div>
  //       {/* Hamburger menu for mobile */}
  //       <div className={styles.hamburger} onClick={toggleCollapsed}>
  //         <MenuOutlined />
  //       </div>
  //       {/* Dropdown menu for mobile */}
  //       <Menu
  //         className={styles.dropdownMenu}
  //         onClick={toggleCollapsed}
  //         style={{ display: collapsed ? "none" : "block" }}
  //       >
  //         <Menu.Item key="home">Home</Menu.Item>
  //         <Menu.Item key="contact">Contact</Menu.Item>
  //         <Menu.Item key="book" className={styles.mobileBookButton}>
  //           <Button type="primary">Book a Table</Button>
  //         </Menu.Item>
  //       </Menu>
  //     </div>
  //   );
};

export default Header;

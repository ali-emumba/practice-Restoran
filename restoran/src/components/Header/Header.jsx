import styles from "./styles.module.css";
import logo from "../../assets/restoran_logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import MobileDropDown from "./MobileDropDown/MobileDropDown";

const Header = () => {
  const [onHomePage, setOnHomePage] = useState(true);
  const [onContactPage, setOnContactPage] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  const toggleCollapsed = () => {
    // console.log("Collapsed");
    setMenuCollapsed(!menuCollapsed);
    // console.log("hhhhhhhh", menuCollapsed);
  };

  return (
    <>
      <nav className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__left}>
            <Link
              to={"/"}
              onClick={() => {
                setOnHomePage(true);
                setOnContactPage(false);
              }}
            >
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
              className={onHomePage ? styles.active__link : styles.links}
              onClick={() => {
                setOnHomePage(true);
                setOnContactPage(false);
              }}
            >
              <span>Home</span>
            </Link>
            <Link
              to={"/contact"}
              className={onContactPage ? styles.active__link : styles.links}
              onClick={() => {
                setOnContactPage(true);
                setOnHomePage(false);
              }}
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
          onHomePage={onHomePage}
          onContactPage={onContactPage}
          setOnHomePage={setOnHomePage}
          setOnContactPage={setOnContactPage}
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

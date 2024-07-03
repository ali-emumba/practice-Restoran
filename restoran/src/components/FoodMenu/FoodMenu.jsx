import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import {
  faHamburger,
  faMugSaucer,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import menuitem1 from "./../../assets/menuitem1.jpg";
import menuitem2 from "./../../assets/menuitem2.jpg";
import MenuItemCard from "./MenuItemCard/MenuItemCard";

const MenuItems = {
  breakfast: [
    {
      id: 1,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 2,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 3,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 4,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 5,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 6,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 7,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 8,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 9,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 10,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
  ],
  dinner: [
    {
      id: 1,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 2,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 3,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 4,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 5,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 6,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 7,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
  ],
  lunch: [
    {
      id: 1,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 2,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 3,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 4,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 5,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 6,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 7,
      image: menuitem1,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
    {
      id: 8,
      image: menuitem2,
      name: "Chicken Burger",
      description: "Ipsum ipsum clita erat amet dolor justo diam",
      price: 115,
    },
  ],
};

const FoodMenu = () => {
  const [menuFilter, setMenuFilter] = useState({
    isBreakfastActive: true,
    isLunchActive: false,
    isDinnerActive: false,
  });

  const renderedMenuBreakfastItems = MenuItems.breakfast.map((i) => (
    <MenuItemCard
      key={i.id}
      image={i.image}
      description={i.description}
      name={i.name}
      price={i.price}
    />
  ));
  const renderedMenuLunchItems = MenuItems.lunch.map((i) => (
    <MenuItemCard
      key={i.id}
      image={i.image}
      description={i.description}
      name={i.name}
      price={i.price}
    />
  ));
  const renderedMenuDinnerItems = MenuItems.dinner.map((i) => (
    <MenuItemCard
      key={i.id}
      image={i.image}
      description={i.description}
      name={i.name}
      price={i.price}
    />
  ));

  return (
    <div className={styles.wrapper}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span className={styles.horizontal__divider}></span>
        <span className={styles.heading}>Food Menu</span>
        <span className={styles.horizontal__divider}></span>
      </div>

      <span className={styles.secondary__heading}>Most Popular Items</span>
      <div style={{ display: "flex" }}>
        <div
          className={styles.menu__filter}
          style={
            menuFilter.isBreakfastActive
              ? { borderBottom: "3px solid var(--primary-color)" }
              : null
          }
          onClick={() =>
            setMenuFilter({
              isBreakfastActive: true,
              isDinnerActive: false,
              isLunchActive: false,
            })
          }
        >
          <FontAwesomeIcon icon={faMugSaucer} className={styles.menu__avatar} />
          <div>
            <p className={styles.menu__subheading}>Popular</p>
            <p className={styles.menu__heading}>Breakfast</p>
          </div>
        </div>

        <div
          className={styles.menu__filter}
          style={
            menuFilter.isLunchActive
              ? { borderBottom: "3px solid var(--primary-color)" }
              : null
          }
          onClick={() =>
            setMenuFilter({
              isBreakfastActive: false,
              isDinnerActive: false,
              isLunchActive: true,
            })
          }
        >
          <FontAwesomeIcon icon={faHamburger} className={styles.menu__avatar} />
          <div>
            <p className={styles.menu__subheading}>Special</p>

            <p className={styles.menu__heading}>Lunch</p>
          </div>
        </div>

        <div
          className={styles.menu__filter}
          style={
            menuFilter.isDinnerActive
              ? { borderBottom: "3px solid var(--primary-color)" }
              : null
          }
          onClick={() =>
            setMenuFilter({
              isBreakfastActive: false,
              isDinnerActive: true,
              isLunchActive: false,
            })
          }
        >
          <FontAwesomeIcon icon={faUtensils} className={styles.menu__avatar} />
          <div>
            <p className={styles.menu__subheading}>Lovely</p>
            <p className={styles.menu__heading}>Dinner</p>
          </div>
        </div>
      </div>
      {/* <div className={styles.underline}></div> */}
      <div className={styles.menu__items__wrapper}>
        {menuFilter.isBreakfastActive && renderedMenuBreakfastItems}
        {menuFilter.isLunchActive && renderedMenuLunchItems}
        {menuFilter.isDinnerActive && renderedMenuDinnerItems}
      </div>
    </div>
  );
};

export default FoodMenu;

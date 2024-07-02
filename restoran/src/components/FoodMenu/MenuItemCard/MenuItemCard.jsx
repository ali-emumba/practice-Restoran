import styles from "./styles.module.css";

const MenuItemCard = ({ image, name, description, price }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left__side}>
        <img src={image} alt="menu item img" className={styles.image} />
      </div>
      <div className={styles.right__side}>
        <div className={styles.right__top}>
          <p className={styles.name}>{name}</p>
          <p className={styles.price}>${price}</p>
        </div>
        <div className={styles.horizontal__line}></div>
        <div className={styles.right__bottom}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;

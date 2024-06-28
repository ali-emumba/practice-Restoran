import styles from "./styles.module.css";
import rotating_image from "../../assets/rotating_image.png";

const LandingScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}>
        <div className={styles.left__side}>
          <h1 className={styles.heading}>Enjoy Our Delicious Meal</h1>
          <h3 className={styles.subheading}>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </h3>
          <button className={styles.book__table__btn}>Book A Table</button>
        </div>
        <div className={styles.right__side}>
          <img
            src={rotating_image}
            className={styles.rotating__image}
            alt="food image rotating"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;

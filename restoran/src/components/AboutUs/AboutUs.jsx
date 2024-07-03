import styles from "./styles.module.css";
import about_image_1 from "./../../assets/about-image-1.jpg";
import about_image_2 from "./../../assets/about-image-2.jpg";
import about_image_3 from "./../../assets/about-image-3.jpg";
import about_image_4 from "./../../assets/about-image-4.jpg";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left__side}>
        <div className={styles.grid__item}>
          <img
            src={about_image_1}
            alt="about us image"
            className={styles.about__img}
          />
        </div>
        <div className={styles.grid__item}>
          <img
            src={about_image_2}
            alt="about us image"
            className={styles.about__img}
          />
        </div>
        <div className={styles.grid__item}>
          <img
            src={about_image_3}
            alt="about us image"
            className={styles.about__img}
          />
        </div>
        <div className={styles.grid__item}>
          <img
            src={about_image_4}
            alt="about us image"
            className={styles.about__img}
          />
        </div>
      </div>
      <div className={styles.right__side}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className={styles.about__us__text}>about us</span>{" "}
          <span className={styles.horizontal__divider}></span>
        </div>
        <h1 className={styles.heading}>
          Welcome to{" "}
          <FontAwesomeIcon
            icon={faUtensils}
            style={{ color: "var(--primary-color)" }}
          />{" "}
          Restoran
        </h1>
        <p className={styles.description}>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam ametdiam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <br />
        <p className={styles.description}>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className={styles.flex__row}>
          <div className={styles.stats__box}>
            <div className={styles.stats__left}>13</div>
            <div className={styles.stats__text}>
              <p>Years Of</p>
              <p className={styles.bold}>Experience</p>
            </div>
          </div>
          <div className={styles.stats__box}>
            <div className={styles.stats__left}>50</div>
            <div className={styles.stats__text}>
              <p>Popular</p>
              <p className={styles.bold}>Master Chefs</p>
            </div>
          </div>
        </div>
        <button className={styles.read__btn}>Read More</button>
      </div>
    </div>
  );
};

export default AboutUs;

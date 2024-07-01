import styles from "./styles.module.css";
import booking_form_img from "./../../assets/booking_form.png";
import Form from "./Form/Form";

const BookingForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left__side}>
        <img
          src={booking_form_img}
          alt="form image"
          className={styles.form_img}
        />
      </div>
      <div className={styles.right__side}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className={styles.about__us__text}>Reservation</span>{" "}
          <span className={styles.horizontal__divider}></span>
        </div>
        <h1 className={styles.heading}>Book A Table Online</h1>
        <Form />
      </div>
    </div>
  );
};

export default BookingForm;

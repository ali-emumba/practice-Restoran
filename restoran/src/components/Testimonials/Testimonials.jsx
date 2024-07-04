import styles from "./styles.module.css";
import client1 from "./../../assets/client1.jpg";
import client2 from "./../../assets/client2.jpg";
import client3 from "./../../assets/client3.jpg";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

// Testimonials data
const Clients = [
  {
    id: 1,
    name: "",
    message: "",
    profession: "",
    avatar: client1,
  },
  {
    id: 2,
    name: "",
    message: "",
    profession: "",
    avatar: client2,
  },
  {
    id: 3,
    name: "",
    message: "",
    profession: "",
    avatar: client3,
  },
];

const Testimonials = () => {
  const renderedClientCards = Clients.map((client) => (
    <TestimonialCard
      key={client.id}
      profession={client.profession}
      name={client.name}
      avatar={client.avatar}
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
        <span className={styles.heading}>Testimonials</span>
        <span className={styles.horizontal__divider}></span>
      </div>

      <span className={styles.secondary__heading}>Our Clients Say!!!</span>
      <div className={styles.flex__row}> {renderedClientCards}</div>
    </div>
  );
};

export default Testimonials;

import AboutUs from "../../components/AboutUs/AboutUs";
import BookingForm from "../../components/BookingForm/BookingForm";
import LandingScreen from "../../components/LandingScreen/LandingScreen";
import ServicesList from "../../components/ServicesList/ServicesList";
import styles from "./styles.module.css";

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <LandingScreen />
      <ServicesList />
      <AboutUs />
      <BookingForm />
    </div>
  );
};

export default LandingPage;

import AboutUs from "../../components/AboutUs/AboutUs";
import BookingForm from "../../components/BookingForm/BookingForm";
import ChefsList from "../../components/ChefsList/ChefsList";
import FoodMenu from "../../components/FoodMenu/FoodMenu";
import LandingScreen from "../../components/LandingScreen/LandingScreen";
import ServicesList from "../../components/ServicesList/ServicesList";
import Testimonials from "../../components/Testimonials/Testimonials";
import styles from "./styles.module.css";

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <LandingScreen />
      <ServicesList />
      <AboutUs />
      <FoodMenu />
      <BookingForm />
      <ChefsList />
      <Testimonials />
    </div>
  );
};

export default LandingPage;

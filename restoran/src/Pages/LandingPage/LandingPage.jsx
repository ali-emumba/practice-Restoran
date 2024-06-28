import LandingScreen from "../../components/LandingScreen/LandingScreen";
import ServicesList from "../../components/ServicesList/ServicesList";
import styles from "./styles.module.css";

const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <LandingScreen />
      <ServicesList />
    </div>
  );
};

export default LandingPage;

import ServiceCard from "./ServiceCard/ServiceCard";
import styles from "./styles.module.css";
import {
  faUserTie,
  faUtensils,
  faCartPlus,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const servicesData = [
  {
    id: 1,
    name: "Master Chefs",
    message:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: faUserTie,
  },
  {
    id: 2,
    name: "Quality Food",
    message:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: faUtensils,
  },
  {
    id: 3,
    name: "Online Order",
    message:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: faCartPlus,
  },
  {
    id: 4,
    name: "24/7 Service",
    message:
      "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
    icon: faHeadset,
  },
];

const ServicesList = () => {
  const renderedServiceCards = servicesData.map((s) => (
    <ServiceCard name={s.name} icon={s.icon} message={s.message} key={s.id} />
  ));
  return <div className={styles.wrapper}>{renderedServiceCards}</div>;
};

export default ServicesList;

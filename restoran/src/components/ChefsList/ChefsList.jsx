import ChefCard from "./ChefCard/ChefCard";
import styles from "./styles.module.css";
import chef1 from "./../../assets/chef-1.jpg";
import chef2 from "./../../assets/chef-2.jpg";
import chef3 from "./../../assets/chef-3.jpg";
import chef4 from "./../../assets/chef-4.jpg";

const Chefs = [
  {
    id: 1,
    name: "",
    designation: "",
    avatar: chef1,
  },
  {
    id: 2,
    name: "",
    designation: "",
    avatar: chef2,
  },
  {
    id: 3,
    name: "",
    designation: "",
    avatar: chef3,
  },
  {
    id: 4,
    name: "",
    designation: "",
    avatar: chef4,
  },
];

const ChefsList = () => {
  const renderedChefCards = Chefs.map((chef) => (
    <ChefCard
      key={chef.id}
      designation={chef.designation}
      name={chef.name}
      avatar={chef.avatar}
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
        <span className={styles.heading}>Team Members</span>
        <span className={styles.horizontal__divider}></span>
      </div>

      <span className={styles.secondary__heading}>Our Master Chefs</span>
      <div className={styles.flex__row}> {renderedChefCards}</div>
    </div>
  );
};

export default ChefsList;

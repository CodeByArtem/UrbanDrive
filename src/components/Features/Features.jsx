
import icons from "../../assets/iconss.svg";
import Category from "../MIU/Category/Category";

import css from "./Features.module.css";

const Features = ({ vehicle, details }) => {
  return (
    <div className={css.container}>
      <ul className={css.categoryList}>
        {details.map(({ iconName, text, styles }, index) => (
          <li key={index}>
            <Category iconPath={icons + "#icon-" + iconName} styles={styles}>
              {text}
            </Category>
          </li>
        ))}
      </ul>
      <h3 className={css.vehicleTitle}>Vehicle details</h3>
      <ul className={css.vehicleList}>
        {vehicle.map(({ title, value }, index) => (
          <li className={css.vehicleItem} key={index}>
            <p>{title}</p>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
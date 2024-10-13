import icons from "../../assets/iconss.svg";
import { getAllDetails, getCategories } from "../../helpers";
import Category from "../MIU/Category/Category";
import css from "./Features.module.css";

const Features = ({ camper }) => {
  if (!camper) {
    return <p>Camper data is not available.</p>;
  }

  const categories = getCategories(camper);
  const { vehicle } = getAllDetails(camper);

  return (
    <div className={css.container}>
      <ul className={css.categoryList}>
        {categories.length > 0 ? (
          categories.map(({ iconName, text, styles }, index) => (
            <li key={index}>
              <Category iconPath={`${icons}#icon-${iconName}`} styles={styles}>
                {text}
              </Category>
            </li>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </ul>

      <h3 className={css.vehicleTitle}>Vehicle details</h3>
      <ul className={css.vehicleList}>
        {vehicle.length > 0 ? (
          vehicle.map(({ title, value }, index) => (
            <li className={css.vehicleItem} key={index}>
              <p>{title}</p>
              <span>{value}</span>
            </li>
          ))
        ) : (
          <p>No vehicle details available.</p>
        )}
      </ul>
    </div>
  );
};

export default Features;

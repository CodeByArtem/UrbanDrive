import icons from "../../assets/iconss.svg";
import { getCategories, getAllDetails } from "../../helpers"; // Импортируем getAllDetails
import Category from "../MIU/Category/Category";

import css from "./Features.module.css";

const Features = ({ camper }) => {
  // Проверяем, что camper определен
  if (!camper) {
    return <p>Camper data is not available.</p>; // Или любое другое сообщение
  }

  const categories = getCategories(camper); // Получаем категории из camper
  const { vehicle } = getAllDetails(camper); // Получаем детали о кемпере

  return (
    <div className={css.container}>
      <ul className={css.categoryList}>
        {categories.map(({ iconName, text, styles }, index) => (
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

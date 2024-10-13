import { useSelector } from "react-redux";
import css from "./CatalogList.module.css";
import { selectFavorites } from "../../redux/favorites/selectors";
import CamperCar from "../CamperCar/CamperCar";

const CatalogList = ({ campers }) => {

  
  const favorites = useSelector(selectFavorites);


  return (
    <ul className={css.list}>
      
      {campers.map((camper) => (
        <li key={camper.id}>
          
          <CamperCar
            camper={camper}
            liked={favorites.some((item) => item.id === camper.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CatalogList;

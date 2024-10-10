import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import clsx from "clsx";

import { setFavorite } from "../../redux/favorites/slice";
import css from "./CamperCar.module.css";
import icons from "../../assets/iconss.svg";
import { formatRentPrice, getCategories } from "../../helpers";
import CamperImage from "../MIU/CamperImage/CamperImage";
import Rating from "../MIU/Rating/Raiting";
import Category from "../MIU/Category/Category";
import LoadButton from "../MIU/LoadButton/LoadButton";
import Location from "../MIU/Location/Location";

const CamperCart = ({ camper, liked = true }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Инициализируем useNavigate
  
  const categories = getCategories(camper); 
  const handleOpenDetails = useCallback(() => {
    console.log("Camper ID:", camper.id); // Проверка ID
    navigate(`/catalog/${camper.id}`);
  }, [camper.id, navigate]);
  

  const handleLike = (camper) => {
    dispatch(setFavorite(camper));
  };

  return (
    <div className={css.container}>
      <CamperImage
        src={camper.gallery[0].thumb}
        alt="Camper photo"
      />
      <div className={css.info}>
        <div className={css.infoHeader}>
          <h2 className={css.name}>{camper.name}</h2>
          <p className={css.price}>{formatRentPrice(camper.price)}</p>
          <button
            className={css.buttonIcon}
            onClick={() => handleLike(camper)}
            aria-label="Like button"
          >
            <svg
              className={clsx(css.icon, { [css.liked]: liked })}
              width={24}
              height={24}
            >
              <use xlinkHref={icons + "#icon-unliked"}></use>
            </svg>
          </button>
        </div>
        <div className={css.infoRating}>
          <Rating rating={camper.rating} countReviews={camper.reviews.length} />
          <Location>{camper.location}</Location>
        </div>
        <p className={css.description}>{camper.description}</p>
        <ul className={css.categoryList}>
          {categories.map(({ iconName, text, styles }, i) => (
            <li key={i}>
              <Category iconPath={icons + "#icon-" + iconName} styles={styles}>
                {text}
              </Category>
            </li>
          ))}
        </ul>
        <LoadButton
          type="button"
          onClick={handleOpenDetails} // Обновленный обработчик
          style={{ minWidth: "166px" }}
        >
          Show more
        </LoadButton>
      </div>
    </div>
  );
};

export default CamperCart;

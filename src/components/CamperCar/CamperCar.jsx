import { useDispatch } from "react-redux";


import css from "./CamperCar.module.css";
import icons from "../../assets/iconss.svg";
import { setFavorite } from "../../redux/favorites/slice";
import clsx from "clsx";

const CamperCar = ({ camper, liked = true }) => {
  const dispatch = useDispatch();

  const handleLike = (camper) => {
    dispatch(setFavorite(camper));
  };

  return (
    <div className={css.container}>
      <img src={camper.gallery[0]} alt="Camper photo" className={css.image} />
      <div className={css.info}>
        <div className={css.infoHeader}>
          <h2 className={css.name}>{camper.name}</h2>
          <p className={css.price}>{camper.price} $</p>
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
        <p className={css.description}>{camper.description}</p>
        <button
          type="button"
          onClick={() => alert('Show more details here!')} // Заглушка для кнопки
          className={css.loadButton}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCar;

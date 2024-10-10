import { useCallback } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";

import { setFavorite } from "../../redux/favorites/slice";
import css from "./CamperCar.module.css";
import icons from "../../assets/iconss.svg";
import { formatRentPrice, getCategories } from "../../helpers";
// import Modal from "../Modal/Modal"; // Если вы его вернете
import CamperImage from "../MIU/CamperImage/CamperImage";
import Rating from "../MIU/Rating/Raiting";
import Category from "../MIU/Category/Category";
import LoadButton from "../MIU/LoadButton/LoadButton";
import Location from "../MIU/Location/Location";

const CamperCart = ({ camper, liked = true }) => {
  const dispatch = useDispatch();
  // const setModal = useModal(); // Если вы вернете useModal

  // const closeModal = useCallback(() => {
  //   setModal();
  // }, [setModal]);
  
  const categories = getCategories(camper); // Проверьте, работает ли getCategories без details


  const handleOpenDetails = useCallback(() => {
    // setModal(<Modal camper={camper} onClose={closeModal} />); // Если вы вернете useModal
  }, [camper]);

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
          onClick={handleOpenDetails} // Если вы вернете useModal
          style={{ minWidth: "166px" }}
        >
          Show more
        </LoadButton>
      </div>
    </div>
  );
};

export default CamperCart;

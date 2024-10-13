import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const categories = getCategories(camper);

  const handleOpenDetails = useCallback(() => {
    console.log("Camper ID:", camper.id);
    navigate(`/catalog/${camper.id}`);
  }, [camper.id, navigate]);

  const handleLike = () => {
    dispatch(setFavorite(camper));
    console.log(camper);
  };

  const hasGallery = camper.gallery && camper.gallery.length > 0;
  const reviewsCount = camper.reviews ? camper.reviews.length : 0;

  return (
    <div className={css.container}>
      {hasGallery ? (
        <CamperImage
          src={camper.gallery[0].thumb}
          alt="Camper photo"
        />
      ) : (
        <div className={css.noImage}>No image available</div>
      )}
      <div className={css.info}>
        <div className={css.infoHeader}>
          <h2 className={css.name}>{camper.name}</h2>
          <p className={css.price}>{formatRentPrice(camper.price)}</p>
          <button
            className={css.buttonIcon}
            onClick={handleLike}
            aria-label="Like button"
          >
            <svg
              className={clsx(css.icon, { [css.liked]: liked })}
              width={24}
              height={24}
            >
              <use xlinkHref={icons + (liked ? "#icon-liked" : "#icon-unliked")}></use>
            </svg>
          </button>
        </div>
        <div className={css.infoRating}>
          <Rating rating={camper.rating} countReviews={reviewsCount} />
          <Location>{camper.location}</Location>
        </div>
        <p className={css.description}>{camper.description}</p>
        <ul className={css.categoryList}>
          {categories.map(({ iconName, text, styles }, i) => (
            <li key={`${iconName}-${text}-${i}`}>
              <Category iconPath={icons + "#icon-" + iconName} styles={styles}>
                {text}
              </Category>
            </li>
          ))}
        </ul>
        <LoadButton
          type="button"
          onClick={handleOpenDetails}
          style={{ minWidth: "166px" }}
        >
          Show more
        </LoadButton>
      </div>
    </div>
  );
};

export default CamperCart;

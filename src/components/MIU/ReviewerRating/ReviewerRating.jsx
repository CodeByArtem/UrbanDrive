import icons from "../../../assets/iconss.svg";
import clsx from "clsx";
import css from "./RevieweRating.module.css";

const ReviewerRating = ({ rating }) => {
  const arr = Array.from({ length: 5 }, (_, i) => rating >= i + 1);

  return (
    <ul className={css.list}>
      {arr.map((item, index) => (
        <li key={index}>
          <svg
            className={clsx(css.icon, { [css.fill]: item })}
            width={16}
            height={16}
          >
            <use xlinkHref={icons + "#icon-rating"}></use>
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default ReviewerRating;
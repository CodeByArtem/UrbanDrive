import icons from "../../../assets/iconss.svg";
import css from "./LikeButton.module.css";

const LikeButton = () => {
  return (
    <button>
      <svg className={css.icon} width={24} height={24}>
        <use xlinkHref={icons + "#icon-unliked"}></use>
      </svg>
    </button>
  );
};

export default LikeButton;
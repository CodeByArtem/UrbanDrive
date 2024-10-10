import icons from "../../../assets/iconss.svg";
import css from "./Location.module.css";

const Location = ({ children }) => {
  return (
    <div className={css.container}>
      <svg className={css.icon} width={16} height={16}>
        <use xlinkHref={icons + "#icon-location"}></use>
      </svg>
      <span>{children}</span>
    </div>
  );
};

export default Location;
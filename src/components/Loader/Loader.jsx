import css from "./Loader.module.css";
import loader from "../../assets/camp.svg"
const Loader = () => {
  return (
    <div className={css.container}>
      <img src={loader} alt="Loading..." className={css.loader} />
    </div>
  );
};

export default Loader;

import Loader from "../../Loader/Loader";
import css from "./PageLoader.module.css";

const PageLoader = () => {
  return (
    <div className={css.container}>
    <Loader/>
    </div>
  );
};

export default PageLoader;
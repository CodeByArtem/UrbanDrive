import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={css.content}>
      <div className={css.wrapper}>
        <h1 className={css.title}>
        Campers of your dreams
        </h1>
        <p className={css.text}>
        You can find everything you want in our catalog
        </p>
        <Link className={css.link} to={"/catalog"}>
        View Now
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
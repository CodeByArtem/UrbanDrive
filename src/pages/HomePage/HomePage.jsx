import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={css.content}>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          Welcome to our <span>camper</span> website
        </h1>
        <p className={css.text}>
          Start exploring today and find the camper that will make your journey
          unforgettable.
        </p>
        <Link className={css.link} to={"/catalog"}>
          Explore campers
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
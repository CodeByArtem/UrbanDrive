import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={css.content}>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          Welcome to UBER Name - Your Trusted Car Rental Service in Ukraine
        </h1>
        <p className={css.text}>
          Experience the freedom of exploring Ukraine with our wide range of rental cars. 
          Enjoy competitive prices, flexible rental options, and exceptional customer service.
        </p>
        <Link className={css.link} to={"/catalog"}>
          Explore Our Cars
        </Link>
      </div>
    </main>
  );
};

export default HomePage;

import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";


const checkIsActive = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Header = () => {
  return (
    <header className={css.header}>
      <Link className={css.logo} to="/">
    
        <p className={css.logoTitle}>TravelTrucks</p>
      </Link>
      <nav>
        <ul className={css.navList}>
          <li>
            <NavLink className={checkIsActive} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={checkIsActive} to="/catalog">
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink className={checkIsActive} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
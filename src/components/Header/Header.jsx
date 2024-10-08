import { Link } from 'react-router-dom';
import css from './Header.module.css'; // Импортируем модульный CSS

const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.navLinks}>
          <li><Link to="/" className={css.navItem}>Home</Link></li>
          <li><Link to="/catalog" className={css.navItem}>Catalog</Link></li>
          <li><Link to="/favorites" className={css.navItem}>Favorites</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

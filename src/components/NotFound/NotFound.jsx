// src/components/NotFound.js

import { Link } from 'react-router-dom';
import css from  "./NoutFound.module.css"; // Импорт стилей, если необходимо

const NotFound = () => {
  return (
    <div className={css.notfound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, this page does not exist.</p>
      <Link to="/">Return to the homepage</Link>
    </div>
  );
};

export default NotFound;
// src/components/NotFound.js

import { Link } from 'react-router-dom';
import css from  "./NoutFound.module.css"; // Импорт стилей, если необходимо

const NotFound = () => {
  return (
    <div className= {css.notfound}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, такой страницы не существует.</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
};

export default NotFound;

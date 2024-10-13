import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import CatalogList from "../../components/CatalogList/CatalogList";
import InvisibleTitle from "../../components/MIU/InvisibleTitle/InvisibleTitle";
import Message from "../../components/MIU/Message/Message";
import css from "./FavoritesPage.module.css"

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <main className={css.favorites}>
      <InvisibleTitle>You favorite campers</InvisibleTitle>
      {favorites.length ? (
        <CatalogList campers={favorites} />
      ) : (
        <Message>No campers added</Message>
      )}
    </main>
  );
};

export default FavoritePage;
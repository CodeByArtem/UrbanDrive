

import Catalog from "../../components/Catalog/Catalog";
import Filters from "../../components/FiltersForm/FiltersForm";
import InvisibleTitle from "../../components/MIU/InvisibleTitle/InvisibleTitle";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <main className={css.container}>
      <InvisibleTitle>
        Explore Our Exclusive Camper Collection – Find Your Perfect Adventure
        Companion
      </InvisibleTitle>
      <section className={css.filters}>
        <Filters />
      </section>
      <section className={css.catalog}>
        <Catalog />
      </section>
    </main>
  );
};

export default CatalogPage;
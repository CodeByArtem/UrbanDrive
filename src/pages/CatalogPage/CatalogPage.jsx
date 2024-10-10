import Catalog from "../../components/Catalog/Catalog";
// import FiltersForm from "../../components/FiltersForm/FiltersForm";
// import { InvisibleTitle } from "../../components/UI";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <main className={css.container}>
      {/* <InvisibleTitle>
        Explore Our Exclusive Camper Collection – Find Your Perfect Adventure
        Companion
      </InvisibleTitle> */}
      <section className={css.filters}>
        {/* <FiltersForm /> */}
      </section>
      <section className={css.catalog}>
        <Catalog />
      </section>
    </main>
  );
};

export default CatalogPage;
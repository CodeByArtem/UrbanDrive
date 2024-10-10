import css from "./PageLoader.module.css";

const PageLoader = () => {
  return (
    <div className={css.container}>
      <div className={css.loader}></div>
    </div>
  );
};

export default PageLoader;
import css from "./Category.module.css";

const Category = ({ iconPath, children, styles = {} }) => {
  return (
    <div className={css.container}>
      <svg className={css.icon} style={styles}>
        <use xlinkHref={iconPath}></use>
      </svg>
      <span>{children}</span>
    </div>
  );
};

export default Category;
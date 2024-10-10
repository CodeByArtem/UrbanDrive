import css from "./InvisibleTitle.module.css";

const InvisibleTitle = ({ children }) => {
  return <h1 className={css.srOnly}>{children}</h1>;
};

export default InvisibleTitle;
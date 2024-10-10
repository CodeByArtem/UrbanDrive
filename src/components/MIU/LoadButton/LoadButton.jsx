import css from "./LoadButton.module.css";

const LoadButton = ({ children, ...rest }) => {
  return (
    <button className={css.button} {...rest}>
      {children}
    </button>
  );
};

export default LoadButton;
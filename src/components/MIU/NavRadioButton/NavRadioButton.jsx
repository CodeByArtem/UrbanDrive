import { useRef } from "react";
import css from "./NavRadioButton.module.css";
import clsx from "clsx";

const NavRadioButton = ({ isChecked, children, ...rest }) => {
  const ref = useRef();

  const handleClick = () => {
    ref.current.click();
  };

  return (
    <>
      <input ref={ref} className={css.input} {...rest} type="radio" />
      <button
        className={clsx(css.button, { [css.active]: isChecked })}
        type="button"
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};

export default NavRadioButton;
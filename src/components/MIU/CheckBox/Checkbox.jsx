import { useRef } from "react";
import css from "./CheckBox.module.css";

const Checkbox = ({
  width,
  height,
  children,
  iconPath,
  iconStyles = {},
  ...rest
}) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.click();
  };

  return (
    <div className={css.container}>
      <input ref={ref} className={css.input} {...rest} />
      <button className={css.button} type="button" onClick={handleClick}>
        <svg
          className={css.icon}
          style={iconStyles}
          width={width}
          height={height}
        >
          <use xlinkHref={iconPath}></use>
        </svg>
        <p className={css.text}>{children}</p>
      </button>
    </div>
  );
};

export default Checkbox;
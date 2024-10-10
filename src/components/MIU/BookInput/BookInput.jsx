import clsx from "clsx";
import css from "./BookInput.module.css";

const BookInput = ({ iconPath, error, register = {}, field = {}, ...rest }) => {
  return (
    <div className={css.wrapper}>
      {iconPath && (
        <svg className={css.icon} width={20} height={20}>
          <use xlinkHref={iconPath}></use>
        </svg>
      )}
      <input
        {...field}
        {...register}
        {...rest}
        className={clsx(css.input, { [css.errorInput]: error?.message })}
      />
      {error && <p className={css.error}>{error.message}</p>}
    </div>
  );
};

export default BookInput;
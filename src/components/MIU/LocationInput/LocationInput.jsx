import icons from "../../../assets/iconss.svg";
import css from "./LocationInput.module.css";

const suggestions = [
  "Ukraine, Kyiv",
  "Ukraine, Poltava",
  "Ukraine, Dnipro",
  "Ukraine, Odesa",
  "Ukraine, Kharkiv",
  "Ukraine, Sumy",
  "Ukraine, Lviv",
];

const LocationInput = ({ id = "location-suggestions", ...rest }) => {
  return (
    <div className={css.container}>
      <svg className={css.icon} width="20" height="20">
        <use xlinkHref={icons + "#icon-location"}></use>
      </svg>
      <input {...rest} type="text" className={css.input} list={id} />
      <datalist id={id}>
        {suggestions.map((suggestion, index) => (
          <option key={index} value={suggestion} label={suggestion} />
        ))}
      </datalist>
    </div>
  );
};

export default LocationInput;

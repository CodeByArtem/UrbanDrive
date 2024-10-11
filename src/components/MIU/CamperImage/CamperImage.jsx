import css from "./CamperImage.module.css";

const CamperImage = ({ src, original, ...rest }) => {
  return (
    <div className={css.container}>
      <a href={original} target="_blank" rel="noopener noreferrer">
        <img src={src} {...rest} className={css.image} width={290} height={310} alt="Camper"></img>
      </a>
    </div>
  );
};

export default CamperImage;

import css from "./CamperImage.module.css";

const CamperImage = ({ ...rest }) => {
  return (
    <div className={css.container}>
      <img {...rest} className={css.image} width={290} height={310}></img>
    </div>
  );
};

export default CamperImage;
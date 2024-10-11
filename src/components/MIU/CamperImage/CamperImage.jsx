import css from "./CamperImage.module.css";

const CamperImage = ({ src,  ...rest }) => {
  return (
    <div className={css.container}>
  
        <img src={src} {...rest} className={css.image} width={292} height={320} alt="Camper"></img>

    </div>
  );
};

export default CamperImage;

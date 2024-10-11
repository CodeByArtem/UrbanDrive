// import { useState } from "react";
// import { formatRentPrice, getAllDetails } from "../../helpers";


// import css from "./Modal.module.css";
// import Rating from "../MIU/Rating/Raiting";
// import Location from "../MIU/Location/Location";
// import CamperImage from "../MIU/CamperImage/CamperImage";
// import NavRadioButton from "../MIU/NavRadioButton/NavRadioButton";
// import Features from "../Features/Features";
// import Reviews from "../Reviews/Reviews";
// import BookForm from "../BookForm/BookForm";




// const navList = ["features", "reviews"];

// const Modal = ({ camper, onClose }) => {
//   const [selectedNav, setSelectedNav] = useState(navList[0]);
//   const { vehicle, details } = getAllDetails(camper);

//   const handleChangeNav = (e) => {
//     setSelectedNav(e.target.value);
//   };

//   return (
//     <div className={css.container}>
//       <button
//         className={css.closeButton}
//         onClick={onClose}
//         aria-label="Close button"
//       ></button>
//       <h2 className={css.name}>{camper.name}</h2>
//       <div className={css.rating}>
//         <Rating rating={camper.rating} countReviews={camper.reviews.length} />
//         <Location>{camper.location}</Location>
//       </div>
//       <p className={css.price}>{formatRentPrice(camper.price)}</p>
//       <div className={css.scrollWrapper}>
//         <div className={css.contentWrapper}>
//           <ul className={css.imageList}>
//             {camper.gallery.map((image, index) => (
//               <li key={index}>
//                 <CamperImage src={image} alt="Camper photo" />
//               </li>
//             ))}
//           </ul>
//           <p className={css.description}>{camper.description}</p>
//           <ul className={css.navList}>
//             {navList.map((nav) => (
//               <li className={css.navItem} key={nav}>
//                 <NavRadioButton
//                   value={nav}
//                   name="nav"
//                   isChecked={nav === selectedNav}
//                   onChange={handleChangeNav}
//                 >
//                   {nav}
//                 </NavRadioButton>
//               </li>
//             ))}
//           </ul>
//           <div className={css.footerWrapper}>
//             {selectedNav === navList[0] && (
//               <Features vehicle={vehicle} details={details} />
//             )}
//             {selectedNav === navList[1] && <Reviews reviews={camper.reviews} />}
//             <BookForm />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
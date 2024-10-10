
import ReviewerRating from "../MIU/ReviewerRating/ReviewerRating";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <ul className={css.reviewList}>
      {reviews.map((review, index) => (
        <li className={css.reviewItem} key={index}>
          <div className={css.header}>
            <div className={css.avatar}>{review.reviewer_name[0]}</div>
            <div className={css.wrapper}>
              <h3 className={css.name}>{review.reviewer_name}</h3>
              <ReviewerRating rating={review.reviewer_rating} />
            </div>
          </div>
          <p className={css.text}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
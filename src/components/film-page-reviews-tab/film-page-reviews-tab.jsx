import React from "react";
import ReviewCard from "../film-review-card/film-review-card";
import reviewsProp from "./reviews.prop";

const FilmPageReviewsTab = (props) => {
  const {reviews} = props;

  const reviewHalf = Math.ceil((reviews.length) / 2);
  const firstColumn = reviews.slice(0, reviewHalf);
  const secondColumn = reviews.slice(reviewHalf);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstColumn.map((review) => (
          <ReviewCard key={review.id} review={review}/>
        ))}
      </div>
      <div className="movie-card__reviews-col">
        {secondColumn.map((review) => (
          <ReviewCard key={review.id} review={review}/>
        ))}
      </div>
    </div>
  );
};

FilmPageReviewsTab.propTypes = {
  reviews: reviewsProp
};

export default FilmPageReviewsTab;

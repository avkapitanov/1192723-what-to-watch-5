import React from "react";
import reviewProp from "../film-page-reviews-tab/review.prop";

import {humanizeReviewDate, formatReviewDate} from "../../utils";

const FilmReviewCard = (props) => {
  const {review} = props;
  const {comment, user, rating, date} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={formatReviewDate(date)}>{humanizeReviewDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

FilmReviewCard.propTypes = {
  review: reviewProp
};

export default FilmReviewCard;

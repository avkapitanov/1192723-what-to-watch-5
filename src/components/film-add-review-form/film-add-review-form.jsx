import React from "react";
import RatingStar from "../rating-star/rating-star";
import {DEFAULT_RATING_FORM_VALUE} from "../../const";
import PropTypes from "prop-types";
import withFilmAddReviewForm from "../../hocks/with-film-add-review-form/with-film-add-review-form";

const FilmAddReviewForm = (props) => {
  const {onFormChange} = props;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onChange={onFormChange}>
        <RatingStar currentRating={DEFAULT_RATING_FORM_VALUE}/>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

FilmAddReviewForm.propTypes = {
  onFormChange: PropTypes.func.isRequired
};

export default withFilmAddReviewForm(FilmAddReviewForm);

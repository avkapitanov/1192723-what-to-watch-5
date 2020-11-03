import React from "react";
import RatingStar from "../rating-star/rating-star";
import {DEFAULT_RATING_FORM_VALUE, REVIEW_RATING_MODIFIER} from "../../const";
import PropTypes from "prop-types";
import withFilmAddReviewForm from "../../hocks/with-film-add-review-form/with-film-add-review-form";
import filmProp from "../film-page/film.prop";
import {fetchReview} from "../../store/api-actions";
import {connect} from "react-redux";

const FilmAddReviewForm = (props) => {
  const {onFormChange, onSubmitForm, film, rating, reviewText} = props;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" data-id={film.id} onChange={onFormChange} onSubmit={(evt) => {
        evt.preventDefault();
        onSubmitForm(film.id, rating, reviewText);
      }}>
        <RatingStar currentRating={DEFAULT_RATING_FORM_VALUE}/>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

FilmAddReviewForm.propTypes = {
  onFormChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  film: filmProp,
  rating: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm(id, rating, comment) {
    dispatch(fetchReview(id, rating * REVIEW_RATING_MODIFIER, comment));
  }
});

export default connect(null, mapDispatchToProps)(withFilmAddReviewForm(FilmAddReviewForm));

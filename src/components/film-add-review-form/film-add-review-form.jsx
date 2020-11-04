import React from "react";
import RatingStar from "../rating-star/rating-star";
import {MAX_REVIEW_TEXT, MIN_REVIEW_TEXT, REVIEW_RATING_MODIFIER} from "../../const";
import PropTypes from "prop-types";
import withFilmAddReviewForm from "../../hocks/with-film-add-review-form/with-film-add-review-form";
import filmProp from "../film-page/film.prop";
import {fetchReview} from "../../store/api-actions";
import {connect} from "react-redux";

const renderErrorBlock = (hasError) => {
  if (!hasError) {
    return null;
  }

  return (
    <div style={{
      color: `red`,
      textAlign: `center`,
      paddingTop: `10px`
    }}>Something wrong, please, try again later</div>
  );
};

const renderTextNotification = (textLength) => {
  if (MIN_REVIEW_TEXT <= textLength && MAX_REVIEW_TEXT >= textLength) {
    return null;
  }

  const text = MIN_REVIEW_TEXT > textLength ?
    `Min symbols ${MIN_REVIEW_TEXT}. Current: ${textLength}` :
    `Max symbols ${MAX_REVIEW_TEXT}. Current: ${textLength}`;

  return (
    <div style={{
      color: `red`,
      marginRight: `auto`
    }}>
      {text}
    </div>
  );

};

const FilmAddReviewForm = (props) => {
  const {onFormChange, onSubmitForm, film, rating, reviewText, hasTextError, setSubmitProcess, isDisabled, onError, hasError} = props;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onChange={onFormChange} onSubmit={(evt) => {
        evt.preventDefault();
        setSubmitProcess();
        onSubmitForm(film.id, rating, reviewText, onError);
      }}>
        <RatingStar currentRating={rating} isDisabled={isDisabled}/>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" disabled={isDisabled}></textarea>
          <div className="add-review__submit">
            {renderTextNotification(reviewText.length)}
            <button className="add-review__btn" type="submit" disabled={hasTextError || isDisabled}>Post</button>
          </div>
        </div>
      </form>
      {renderErrorBlock(hasError)}
    </div>
  );
};

FilmAddReviewForm.propTypes = {
  onFormChange: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  film: filmProp,
  rating: PropTypes.string.isRequired,
  reviewText: PropTypes.string.isRequired,
  hasTextError: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  setSubmitProcess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm(id, rating, comment, callback) {
    dispatch(fetchReview(id, rating * REVIEW_RATING_MODIFIER, comment, callback));
  }
});

export default connect(null, mapDispatchToProps)(withFilmAddReviewForm(FilmAddReviewForm));

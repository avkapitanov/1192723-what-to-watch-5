import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import filmProp from "../film-page/film.prop";
import {connect} from "react-redux";
import {fetchReview} from "../../store/api-actions";
import {useStateWithCallbackLazy} from "../../hooks/use-state-with-callback-lazy/use-state-with-callback-lazy";

import {
  REVIEW_RATING_MODIFIER,
  MAX_RATING_VALUE_FORM,
  MIN_REVIEW_TEXT,
  MAX_REVIEW_TEXT, HOVER_TIME_BEFORE_HIDE_ERROR
} from "../../const";
import FilmAddReviewFormErrorBlock from "../film-add-review-form-error-block/film-add-review-form-error-block";
import FilmAddReviewFormTextFieldNotification
  from "../film-add-review-form-text-field-notification/film-add-review-form-text-field-notification";
import RatingStar from "../rating-star/rating-star";

const SubmitButtonCaption = {
  DEFAULT: `Post`,
  SENDING: `Posting...`,
};

const FilmAddReviewForm = (props) => {
  const {onSubmitForm, film} = props;
  const [rating, setRating] = useState(null);
  const [reviewText, setReviewText] = useState(``);
  const [hasFieldsError, setFieldsError] = useState(true);
  const [isSending, setSending] = useState(false);
  const [hasError, setError] = useStateWithCallbackLazy(false);

  useEffect(() =>{
    setFieldsError(reviewText.length < MIN_REVIEW_TEXT || reviewText.length > MAX_REVIEW_TEXT || rating === null);
  }, [rating, reviewText]);

  const handleRatingChange = (evt) => {
    const {value} = evt.target;
    setRating(value);
  };

  const handleReviewTextChange = (evt) => {
    const {value} = evt.target;
    setReviewText(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSending(true);
    onSubmitForm(film.id, rating, reviewText, handleError);
  };

  const handleError = () => {
    setSending(false);
    setError(true, () => {
      setTimeout(() => {
        setError(false);
      }, HOVER_TIME_BEFORE_HIDE_ERROR);
    });
  };

  const error = (hasError && <FilmAddReviewFormErrorBlock errorText={`Something wrong, please, try again later`} />);

  const submitButtonCaption = isSending ? SubmitButtonCaption.SENDING : SubmitButtonCaption.DEFAULT;

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <RatingStar isDisabled={isSending} maxRating={MAX_RATING_VALUE_FORM} onChangeHandler={handleRatingChange}/>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="reviewText" id="review-text" placeholder="Review text" disabled={isSending} onChange={handleReviewTextChange}></textarea>
          <div className="add-review__submit">
            <FilmAddReviewFormTextFieldNotification textLength={reviewText.length} minLength={MIN_REVIEW_TEXT} maxLength={MAX_REVIEW_TEXT}/>
            <button className="add-review__btn" type="submit" disabled={hasFieldsError || isSending}>{submitButtonCaption}</button>
          </div>
        </div>
      </form>
      {error}
    </div>
  );
};

FilmAddReviewForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  film: filmProp,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitForm(id, rating, comment, callback) {
    dispatch(fetchReview(id, rating * REVIEW_RATING_MODIFIER, comment, callback));
  }
});

export {FilmAddReviewForm};

export default connect(null, mapDispatchToProps)(FilmAddReviewForm);

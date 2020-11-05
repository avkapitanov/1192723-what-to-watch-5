import React from "react";
import PropTypes from "prop-types";
import {MAX_REVIEW_TEXT, MIN_REVIEW_TEXT} from "../../const";

const FilmAddReviewFormTextFieldNotification = ({textLength}) => {
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

FilmAddReviewFormTextFieldNotification.propTypes = {
  textLength: PropTypes.number.isRequired
};

export default FilmAddReviewFormTextFieldNotification;

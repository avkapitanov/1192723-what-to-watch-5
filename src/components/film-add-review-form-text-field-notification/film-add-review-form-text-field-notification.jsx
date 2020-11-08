import React from "react";
import PropTypes from "prop-types";

const FilmAddReviewFormTextFieldNotification = ({textLength, minLength, maxLength}) => {
  if (minLength <= textLength && maxLength >= textLength) {
    return null;
  }

  const text = minLength > textLength ?
    `Min symbols ${minLength}. Current: ${textLength}` :
    `Max symbols ${maxLength}. Current: ${textLength}`;

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
  textLength: PropTypes.number.isRequired,
  minLength: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default FilmAddReviewFormTextFieldNotification;

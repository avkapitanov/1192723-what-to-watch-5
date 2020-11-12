import React from "react";
import PropTypes from "prop-types";

const FilmAddReviewFormErrorBlock = ({errorText}) => {
  return (
    <div style={{
      color: `red`,
      textAlign: `center`,
      paddingTop: `10px`
    }}>{errorText}</div>
  );
};

FilmAddReviewFormErrorBlock.propTypes = {
  errorText: PropTypes.string.isRequired
};

export default FilmAddReviewFormErrorBlock;

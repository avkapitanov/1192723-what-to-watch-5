import React from "react";
import PropTypes from "prop-types";

const FilmAddReviewFormErrorBlock = ({hasError}) => {
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

FilmAddReviewFormErrorBlock.propTypes = {
  hasError: PropTypes.bool.isRequired
};

export default FilmAddReviewFormErrorBlock;

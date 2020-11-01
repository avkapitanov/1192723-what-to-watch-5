import React from "react";
import PropTypes from "prop-types";

const ShowMoreFilmsBtn = (props) => {
  const {onChangeFilmsCount} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onChangeFilmsCount}>Show more</button>
    </div>
  );
};

ShowMoreFilmsBtn.propTypes = {
  onChangeFilmsCount: PropTypes.func.isRequired,
};

export default ShowMoreFilmsBtn;

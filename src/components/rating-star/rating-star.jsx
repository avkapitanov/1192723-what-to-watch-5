import React from "react";
import PropTypes from "prop-types";

const RatingStar = (props) => {
  const {currentRating, isDisabled, maxRating, onChangeHandler} = props;

  return (
    <div className="rating">
      <div className="rating__stars">
        {[...Array(maxRating).keys()].map((numb) => {
          const value = ++numb;
          return (
            <React.Fragment key={`star-${numb}`}>
              <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value}
                defaultChecked={+currentRating === value}
                disabled={isDisabled}
                onChange={onChangeHandler}
              />
              <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
            </React.Fragment>
          );
        })
        }
      </div>
    </div>
  );
};

RatingStar.propTypes = {
  currentRating: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  maxRating: PropTypes.number.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default RatingStar;

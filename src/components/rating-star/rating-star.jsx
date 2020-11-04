import React from "react";
import PropTypes from "prop-types";
import {MAX_RATING_VALUE_FORM} from "../../const";

const RatingStar = (props) => {
  const {currentRating, isDisabled} = props;

  return (
    <div className="rating">
      <div className="rating__stars">
        {[...Array(MAX_RATING_VALUE_FORM).keys()].map((numb) => {
          const value = ++numb;
          return (
            <React.Fragment key={`star-${numb}`}>
              <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value}
                defaultChecked={+currentRating === value}
                disabled={isDisabled}
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
  isDisabled: PropTypes.bool.isRequired
};

export default RatingStar;

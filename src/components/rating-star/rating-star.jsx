import React, {Component} from "react";
import PropTypes from "prop-types";
import {MAX_RATING_VALUE_FORM} from "../../const";

class RatingStar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRating: this.props.currentRating
    };
  }

  render() {
    const {currentRating} = this.state;
    return (
      <div className="rating">
        <div className="rating__stars">
          {[...Array(MAX_RATING_VALUE_FORM).keys()].map((numb) => {
            const value = ++numb;
            return (
              <React.Fragment key={`star-${numb}`}>
                <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value}
                  defaultChecked={currentRating === value}
                />
                <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
              </React.Fragment>
            );
          })
          }
        </div>
      </div>
    );
  }
}

RatingStar.propTypes = {
  currentRating: PropTypes.string.isRequired
};

export default RatingStar;

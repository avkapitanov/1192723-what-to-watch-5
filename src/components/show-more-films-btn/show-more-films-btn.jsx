import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import PropTypes from "prop-types";

const ShowMoreFilmsBtn = (props) => {
  const {filmsCount, renderedFilmsCount, incRenderedFilmsCount} = props;

  if (renderedFilmsCount >= filmsCount) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={incRenderedFilmsCount}>Show more</button>
    </div>
  );
};

export {ShowMoreFilmsBtn};

ShowMoreFilmsBtn.propTypes = {
  incRenderedFilmsCount: PropTypes.func.isRequired,
  filmsCount: PropTypes.number.isRequired,
  renderedFilmsCount: PropTypes.number.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  renderedFilmsCount: PROCESS.renderedFilmsCount
});

const mapDispatchToProps = (dispatch) => ({
  incRenderedFilmsCount() {
    dispatch(ActionCreator.incRenderedFilmsCount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreFilmsBtn);

import React from "react";
import {fetchAddToMyList} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getLoggedFlag} from "../../store/selectors";

const AddToMyListBtn = (props) => {
  const {filmId, isFavorite, onAddToMyListBtnClick, isLogged} = props;

  if (!isLogged) {
    return null;
  }

  return (
    <button className="btn btn--list movie-card__button" type="button"
      onClick={(evt) => {
        evt.preventDefault();
        onAddToMyListBtnClick(filmId, isFavorite);
      }}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

AddToMyListBtn.propTypes = {
  filmId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onAddToMyListBtnClick: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isLogged: getLoggedFlag(state)
});

const mapDispatchToProps = (dispatch) => ({
  onAddToMyListBtnClick(filmId, isFavorite) {
    const isFavoriteParam = isFavorite ? `0` : `1`;
    dispatch(fetchAddToMyList(filmId, isFavoriteParam));
  }
});

export {AddToMyListBtn};

export default connect(mapStateToProps, mapDispatchToProps)(AddToMyListBtn);

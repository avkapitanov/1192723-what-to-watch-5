import React from "react";
import {fetchAddToMyList} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getLoggedFlag} from "../../store/selectors";

const AddToMyListBtn = (props) => {
  const {filmId, isFavorite, handleMyListBtnClick, isLogged, isPromo} = props;

  if (!isLogged) {
    return null;
  }

  return (
    <button className="btn btn--list movie-card__button" type="button"
      onClick={(evt) => {
        evt.preventDefault();
        handleMyListBtnClick(filmId, isFavorite, isPromo);
      }}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
  );
};

const mapStateToProps = ({USER}) => ({
  isLogged: getLoggedFlag(USER)
});

const mapDispatchToProps = (dispatch) => ({
  handleMyListBtnClick(filmId, isFavorite, isPromo = false) {
    const isFavoriteParam = isFavorite ? `0` : `1`;
    dispatch(fetchAddToMyList(filmId, isFavoriteParam, isPromo));
  }
});

export {AddToMyListBtn};

AddToMyListBtn.propTypes = {
  filmId: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  handleMyListBtnClick: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isPromo: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToMyListBtn);

import React from "react";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const FilmsFilter = (props) => {
  const {filterGenres, selectedFilterGenre, changeFilterGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {
        filterGenres.map((genre) =>
          <li key={genre} className={`catalog__genres-item ${selectedFilterGenre === genre ? `catalog__genres-item--active` : ``}`}>
            <a href="#" className="catalog__genres-link" data-genre={genre} onClick={changeFilterGenre}>{genre}</a>
          </li>
        )
      }
    </ul>
  );
};

export {FilmsFilter};

FilmsFilter.propTypes = {
  changeFilterGenre: PropTypes.func.isRequired,
  selectedFilterGenre: PropTypes.string.isRequired,
  filterGenres: PropTypes.array.isRequired
};

const mapStateToProps = ({DATA, PROCESS}) => ({
  selectedFilterGenre: PROCESS.selectedFilterGenre,
  filterGenres: DATA.filterGenres
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterGenre(evt) {
    evt.preventDefault();
    dispatch(ActionCreator.changeFilterGenre(evt.target.dataset.genre));
    dispatch(ActionCreator.resetRenderedFilmsCount());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmsFilter);

import React from "react";
import {changeFilterGenre} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getFilterGenres, getSelectedGenre} from "../../store/selectors";

const FilmsFilter = (props) => {
  const {filterGenres, selectedFilterGenre, onChangeFilterGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {
        filterGenres.map((genre) =>
          <li key={genre} className={`catalog__genres-item ${selectedFilterGenre === genre ? `catalog__genres-item--active` : ``}`}>
            <a href="#" className="catalog__genres-link" data-genre={genre} onClick={onChangeFilterGenre}>{genre}</a>
          </li>
        )
      }
    </ul>
  );
};

FilmsFilter.propTypes = {
  onChangeFilterGenre: PropTypes.func.isRequired,
  selectedFilterGenre: PropTypes.string.isRequired,
  filterGenres: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  selectedFilterGenre: getSelectedGenre(state),
  filterGenres: getFilterGenres(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilterGenre(evt) {
    evt.preventDefault();
    dispatch(changeFilterGenre(evt.target.dataset.genre));
  },
});

export {FilmsFilter};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsFilter);

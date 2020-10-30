import {createSelector} from "reselect";
import {DEFAULT_GENRE_FILTER_VALUE} from "../const";

const getFilms = (state) => state.films;
const getFilmId = (_state, props) => +props.match.params.id;
const getSelectedGenre = (state) => state.selectedFilterGenre;

export const getFilmById = createSelector(
    [getFilms, getFilmId],
    (films, id) => films.find((film) => film.id === id)
);

export const filterFilmsByGenre = createSelector(
    [getFilms, getSelectedGenre],
    (films, genre) => {
      if (genre === DEFAULT_GENRE_FILTER_VALUE) {
        return films;
      }

      return films.filter((film) => film.genre.includes(genre));
    }
);

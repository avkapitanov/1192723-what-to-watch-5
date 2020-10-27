import {createSelector} from "reselect";

const getFilms = (state) => state.films;
const getFilmId = (_state, props) => props.match.params.id;

export const getFilmById = createSelector(
    [getFilms, getFilmId],
    (films, id) => films.find((film) => film.id === id)
);

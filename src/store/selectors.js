import {createSelector} from "reselect";
import {AuthorizationStatus, DEFAULT_GENRE_FILTER_VALUE} from "../const";

export const getFilms = (state) => Object.values(state.DATA.films.entities);
export const getSelectedGenre = (state) => state.PROCESS.selectedFilterGenre;
export const getMyFilms = (state) => state.DATA.myFilms;
export const getLoggedFlag = (state) => state.USER.authorizationStatus === AuthorizationStatus.AUTH;
export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;
export const getAuthInfo = (state) => state.USER.authInfo;
export const getFilmReviews = (state) => state.DATA.reviews;
export const getFilm = (state) => state.DATA.film;
export const getPromoFilm = (state) => state.DATA.films.entities[state.DATA.films.promoId];
export const getFilterGenres = (state) => state.DATA.filterGenres;

export const filterFilmsByGenre = createSelector(
    [getFilms, getSelectedGenre],
    (films, genre) => {
      if (genre === DEFAULT_GENRE_FILTER_VALUE) {
        return films;
      }

      return films.filter((film) => film.genre.includes(genre));
    }
);

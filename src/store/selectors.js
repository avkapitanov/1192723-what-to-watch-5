import {createSelector} from "reselect";
import {AuthorizationStatus, DEFAULT_GENRE_FILTER_VALUE, INITIAL_FILMS_SIMILAR_COUNT} from "../const";

const getFilmsSelector = (state) => state.DATA.films.entities;
export const getFilms = createSelector(
    getFilmsSelector,
    (films) => Object.values(films)
);
export const getFilmId = (state) => state.DATA.filmId;
export const getSelectedGenre = (state) => state.PROCESS.selectedFilterGenre;
const getMyFilmsIds = (state) => state.DATA.myFilms;
export const getLoggedFlag = (state) => state.USER.authorizationStatus === AuthorizationStatus.AUTH;
export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;
export const getAuthInfo = (state) => state.USER.authInfo;
export const getFilmReviews = (state) => state.DATA.reviews;
export const getFilm = (state) => state.DATA.films.entities[state.DATA.filmId];
export const getPromoFilm = (state) => state.DATA.films.entities[state.DATA.promoId];
export const getFilterGenres = (state) => state.DATA.filterGenres;
export const getLoadingFlag = (state) => state.PROCESS.isLoading;

export const filterFilmsByGenre = createSelector(
    [getFilms, getSelectedGenre],
    (films, genre) => {
      if (genre === DEFAULT_GENRE_FILTER_VALUE) {
        return films;
      }

      return films.filter((film) => film.genre.includes(genre));
    }
);

export const getSimilarFilms = createSelector(
    [getFilms, getFilm],
    (films, film) => {
      if (!film) {
        return [];
      }

      return films.filter((f) => {
        const similarGenres = f.genre.filter((genre) => {
          return film.genre.includes(genre) && film.id !== f.id;
        });
        return similarGenres.length > 0;
      }).slice(0, INITIAL_FILMS_SIMILAR_COUNT);
    }
);

export const getMyFilms = createSelector(
    [getFilms, getMyFilmsIds],
    (films, myFilmIds) => {
      return films.filter((film) => myFilmIds.includes(film.id));
    }
);

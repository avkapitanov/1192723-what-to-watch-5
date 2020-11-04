export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_MY_FILMS: `LOAD_MY_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  CHANGE_FILM_FAVORITE_STATUS: `CHANGE_FILM_FAVORITE_STATUS`,
  LOAD_REVIEWS_FOR_FILM: `LOAD_REVIEWS_FOR_FILM`,
  LOAD_FILM: `LOAD_FILM`,
};

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const loadMyFilms = (films) => ({
  type: ActionType.LOAD_MY_FILMS,
  payload: films,
});

export const requireAuthorization = (status, data) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: {status, data},
});

export const loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO,
  payload: film,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const changeFavoriteStatus = (film, isPromo) => ({
  type: ActionType.CHANGE_FILM_FAVORITE_STATUS,
  payload: {film, isPromo},
});

export const changeFilterGenre = (genre) => ({
  type: ActionType.CHANGE_FILTER_GENRE,
  payload: genre,
});

export const getReviewsForFilm = (comments) => ({
  type: ActionType.LOAD_REVIEWS_FOR_FILM,
  payload: comments,
});

export const loadFilm = (film) => ({
  type: ActionType.LOAD_FILM,
  payload: film,
});

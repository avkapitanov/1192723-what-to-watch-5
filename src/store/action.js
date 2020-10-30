import {FILMS_COUNT_PER_STEP} from "../const";

export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  INC_RENDERED_FILMS_COUNT: `INC_RENDERED_FILMS_COUNT`,
  RESET_RENDERED_FILMS_COUNT: `RESET_RENDERED_FILMS_COUNT`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

export const ActionCreator = {
  changeFilterGenre: (genre) => ({
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: genre,
  }),
  incRenderedFilmsCount: () => ({
    type: ActionType.INC_RENDERED_FILMS_COUNT,
    payload: FILMS_COUNT_PER_STEP
  }),
  resetRenderedFilmsCount: () => ({
    type: ActionType.RESET_RENDERED_FILMS_COUNT,
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  requireAuthorization: (status, data) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {status, data},
  }),
  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO,
    payload: film,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};

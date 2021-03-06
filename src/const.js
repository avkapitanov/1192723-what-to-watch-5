export const MAX_RATING_VALUE_FORM = 5;
export const HOVER_TIME_BEFORE_PLAYING = 2000;
export const FilmTab = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};
export const DEFAULT_ACTIVE_TAB = FilmTab.OVERVIEW;
export const DEFAULT_GENRE_FILTER_VALUE = `All genres`;
export const INITIAL_FILMS_COUNT = 8;
export const INITIAL_FILMS_SIMILAR_COUNT = 4;
export const FILMS_COUNT_PER_PAGE = 8;
export const MAX_GENRES_IN_FILTER = 9;
export const API_ENDPOINT = `https://5.react.pages.academy/wtw`;
export const REQUEST_TIMEOUT = 5000;
export const HttpResponseCode = {
  UNAUTHORIZED: 401
};
export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};
export const FilmRating = {
  BAD: {
    VALUE: 3,
    TEXT: `Bad`
  },
  NORMAL: {
    VALUE: 5,
    TEXT: `Normal`
  },
  GOOD: {
    VALUE: 8,
    TEXT: `Good`
  },
  VERY_GOOD: {
    VALUE: 10,
    TEXT: `Very good`
  },
  AWESOME: {
    TEXT: `Awesome`
  }
};
export const ReducerNameSpace = {
  DATA: `DATA`,
  PROCESS: `PROCESS`,
  USER: `USER`
};
export const REVIEW_RATING_MODIFIER = 2;
export const MIN_REVIEW_TEXT = 50;
export const MAX_REVIEW_TEXT = 400;
export const HOVER_TIME_BEFORE_HIDE_ERROR = 5000;
export const EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const APIRoute = {
  FILMS: `/films`,
  FAVORITE: `/favorite`,
  COMMENTS: `/comments`,
  PROMO_FILM: `/films/promo`,
  LOGIN: `/login`
};
export const TIMER_UPDATE_FREQUENCY = 1000;
export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FILMS: `/films`,
  MY_LIST: `/mylist`
};



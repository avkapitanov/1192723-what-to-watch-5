import {adaptFilmsToClient, extend, getUniqueGenresFromFilms} from "../utils";
import {ActionType} from "./action";
import {DEFAULT_GENRE_FILTER_VALUE, INITIAL_FILMS_COUNT} from "../const";
import promoFilm from "../mocks/promo-film";
import reviews from "../mocks/reviews";

const initialState = {
  selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
  films: [],
  promoFilm,
  filterGenres: [],
  renderedFilmsCount: INITIAL_FILMS_COUNT,
  reviews
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        selectedFilterGenre: action.payload,
      });
    case ActionType.INC_RENDERED_FILMS_COUNT:
      return extend(state, {
        renderedFilmsCount: state.renderedFilmsCount + action.payload,
      });
    case ActionType.RESET_RENDERED_FILMS_COUNT:
      return extend(state, {
        renderedFilmsCount: INITIAL_FILMS_COUNT,
      });
    case ActionType.LOAD_FILMS:
      const adaptedFilms = adaptFilmsToClient(action.payload);
      return extend(state, {
        films: adaptedFilms,
        filterGenres: getUniqueGenresFromFilms(adaptedFilms)
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};


export {reducer};

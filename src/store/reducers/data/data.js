import {
  adaptFilmToClient,
  extend,
  getNewFilmsState, getNewFilmsStateAfterFilmUpdate, getNewMyFilmsState,
} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  films: {
    ids: [],
    entities: {}
  },
  filmId: null,
  promoId: null,
  myFilms: [],
  filterGenres: [],
  reviews: [],
  film: null,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, getNewFilmsState(action.payload));
    case ActionType.LOAD_MY_FILMS:
      return extend(state, getNewMyFilmsState(action.payload));
    case ActionType.LOAD_PROMO:
      const adaptedPromo = adaptFilmToClient(action.payload);
      return extend(state, {
        promoId: adaptedPromo.id
      });
    case ActionType.CHANGE_FILM_FAVORITE_STATUS:
      const adaptedFilm = adaptFilmToClient(action.payload.film);
      const newState = extend(state, {
        film: adaptedFilm
      });
      if (action.payload.isPromo) {
        return extend(newState, {
          promoFilm: adaptedFilm
        });
      }
      return newState;
    case ActionType.LOAD_REVIEWS_FOR_FILM:
      return extend(state, {
        reviews: action.payload
      });
    case ActionType.LOAD_FILM:
      return extend(state, getNewFilmsStateAfterFilmUpdate(state, action.payload));
    case ActionType.CHANGE_FILM_ROUTE_ID:
      return extend(state, {
        filmId: action.payload
      });
  }

  return state;
};

export {data};

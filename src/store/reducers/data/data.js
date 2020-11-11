import {
  adaptFilmToClient,
  extend, getNewFilmsState,
  getNewFilmsStateAfterFilmUpdate, getNewMyFilmsState,
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
  reviews: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, getNewFilmsState(action.payload));
    case ActionType.LOAD_MY_FILMS:
      return extend(state, getNewMyFilmsState(action.payload));
    case ActionType.LOAD_PROMO:
      return extend(state, {
        films: getNewFilmsStateAfterFilmUpdate(state, action.payload),
        promoId: action.payload.id
      });
    case ActionType.CHANGE_FILM_FAVORITE_STATUS:
      return extend(state, {
        films: getNewFilmsStateAfterFilmUpdate(state, adaptFilmToClient(action.payload))
      });
    case ActionType.LOAD_REVIEWS_FOR_FILM:
      return extend(state, {
        reviews: action.payload
      });
    case ActionType.FETCH_FILM_REQUEST:
      return extend(state, {
        films: getNewFilmsStateAfterFilmUpdate(state, action.payload),
        filmId: action.payload.id
      });
  }

  return state;
};

export {data};

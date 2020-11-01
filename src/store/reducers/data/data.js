import {adaptFilmsToClient, adaptFilmToClient, extend, getUniqueGenresFromFilms} from "../../../utils";
import {ActionType} from "../../action";
import reviews from "../../../mocks/reviews";

const initialState = {
  films: [],
  myFilms: [],
  filterGenres: [],
  reviews
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      const adaptedFilms = adaptFilmsToClient(action.payload);
      return extend(state, {
        films: adaptedFilms,
        filterGenres: getUniqueGenresFromFilms(adaptedFilms)
      });
    case ActionType.LOAD_MY_FILMS:
      const adaptedMyFilms = adaptFilmsToClient(action.payload);
      return extend(state, {
        myFilms: adaptedMyFilms
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoFilm: adaptFilmToClient(action.payload)
      });
  }

  return state;
};

export {data};

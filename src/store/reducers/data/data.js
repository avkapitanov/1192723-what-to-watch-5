import {adaptFilmsToClient, adaptFilmToClient, extend, getUniqueGenresFromFilms} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  films: [],
  myFilms: [],
  filterGenres: [],
  reviews: [],
  film: null,
  promoFilm: null
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
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoFilm: adaptFilmToClient(action.payload)
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
      return extend(state, {
        film: adaptFilmToClient(action.payload)
      });
  }

  return state;
};

export {data};

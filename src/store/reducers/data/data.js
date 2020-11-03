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
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promoFilm: adaptFilmToClient(action.payload)
      });
    case ActionType.CHANGE_FILM_FAVORITE_STATUS:
      const adaptedFilm = adaptFilmToClient(action.payload);
      const index = state.films.findIndex((film) => film.id === adaptedFilm.id);
      const newFilms = [
        ...state.films.slice(0, index),
        adaptedFilm,
        ...state.films.slice(index + 1)
      ];
      return extend(state, {
        films: newFilms
      });
  }

  return state;
};

export {data};

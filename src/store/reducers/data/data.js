import {adaptFilmsToClient, adaptFilmToClient, extend, getUniqueGenresFromFilms} from "../../../utils";
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
      const adaptedFilms = adaptFilmsToClient(action.payload);

      const byId = adaptedFilms.reduce((acc, film) => extend(
          acc,
          {[film.id]: film}
      ), {});

      return extend(state, {
        films: extend(state.films, {
          ids: Object.keys(byId),
          entities: byId
        }),
        filterGenres: getUniqueGenresFromFilms(adaptedFilms),
      });
    case ActionType.LOAD_MY_FILMS:
      const adaptedMyFilms = adaptFilmsToClient(action.payload);

      return extend(state, {
        myFilms: adaptedMyFilms
      });
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
      const film = adaptFilmToClient(action.payload);
      return extend(state, {
        film,
        filmId: film.id
      });
  }

  return state;
};

export {data};

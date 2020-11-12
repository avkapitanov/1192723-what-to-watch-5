import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {data} from "./data";
import {ActionType} from "../../action";
import {
  fetchAddToMyList,
  fetchFilm,
  fetchFilmCommentsList,
  fetchFilmsList,
  fetchMyFilmsList,
  fetchPromoFilm, fetchReview
} from "../../api-actions";
import {APIRoute, AppRoute} from "../../../const";
import {films} from "../../../mocks/films";
import {promoFilm, filmWIthChangedStatus} from "../../../mocks/film";
import {reviews} from "../../../mocks/reviews";
import {
  adaptFilmToClient,
  getNewFilmsState,
  getNewMyFilmsState,
  extend, getNewFilmsStateAfterFilmUpdate, adaptFilmsToClient
} from "../../../utils";

const api = createAPI(() => {});
const adaptedFilms = adaptFilmsToClient(films);
const adaptedPromoFilm = adaptFilmToClient(promoFilm);

it(`Data reducer without additional parameters should return initial state`, () => {
  expect(data(void 0, {})).toEqual({
    films: {
      ids: [],
      entities: {}
    },
    filmId: null,
    promoId: null,
    myFilms: [],
    filterGenres: [],
    reviews: []
  });
});

it(`Data reducer should update films and genres by load films`, () => {
  expect(data({
    films: {
      ids: [],
      entities: {}
    },
    filterGenres: []
  }, {
    type: ActionType.LOAD_FILMS,
    payload: adaptedFilms,
  })).toEqual(getNewFilmsState(adaptedFilms));
});

it(`Data reducer should update my films by load my films`, () => {
  expect(data({
    myFilms: []
  }, {
    type: ActionType.LOAD_MY_FILMS,
    payload: adaptedFilms,
  })).toEqual(getNewMyFilmsState(adaptedFilms));
});

it(`Data reducer should update promo film by load promo film`, () => {
  const initialState = extend(
      getNewFilmsState(adaptedFilms),
      {
        promoId: null
      }
  );
  expect(data(
      initialState, {
        type: ActionType.LOAD_PROMO,
        payload: adaptedPromoFilm,
      })).toEqual(extend(initialState,
      {
        promoId: adaptedPromoFilm.id
      }));
});

it(`Data reducer should update film reviews by load reviews`, () => {
  expect(data({
    reviews: []
  }, {
    type: ActionType.LOAD_REVIEWS_FOR_FILM,
    payload: reviews,
  })).toEqual({
    reviews
  });
});

it(`Data reducer should update film reviews by load film`, () => {
  const initialState = extend(
      getNewFilmsState(adaptedFilms),
      {
        filmId: null
      }
  );
  expect(data(
      initialState, {
        type: ActionType.FETCH_FILM_REQUEST,
        payload: adaptedPromoFilm,
      })).toEqual(extend(initialState,
      {
        filmId: adaptedPromoFilm.id
      }));
});

it(`Data reducer should update film reviews by change favorite status`, () => {
  const adaptedFilm = adaptFilmToClient(filmWIthChangedStatus);
  const initialState = getNewFilmsState(adaptedFilms);
  expect(data(
      initialState, {
        type: ActionType.CHANGE_FILM_FAVORITE_STATUS,
        payload: filmWIthChangedStatus,
      })).toEqual(extend(initialState,
      {
        films: getNewFilmsStateAfterFilmUpdate(initialState, adaptedFilm)
      }));
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmsList();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, []);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.LOAD_FILMS,
          payload: [],
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchMyFilmsList();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(200, []);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MY_FILMS,
          payload: [],
        });
      });
  });

  it(`Should make a correct API call to /promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchPromoFilm();

    apiMock
      .onGet(APIRoute.PROMO_FILM)
      .reply(200, promoFilm);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: adaptedPromoFilm,
        });
      });
  });

  it(`Should make a correct API call to /comments/:film_id`, () => {
    const filmId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilmCommentsList(filmId);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${filmId}`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS_FOR_FILM,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /film/:film_id`, () => {
    const filmId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchFilm(filmId);

    apiMock
      .onGet(`${APIRoute.FILMS}/${filmId}`)
      .reply(200, promoFilm);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_FILM_REQUEST,
          payload: adaptedPromoFilm,
        });
      });
  });

  it(`Should make a correct API call to /favorite/:film_id/:status`, () => {
    const filmId = 1;
    const status = 0;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchAddToMyList(filmId, status);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${filmId}/${status}`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FILM_FAVORITE_STATUS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/:film_id`, () => {
    const filmId = 1;
    const rating = 10;
    const comment = `Test comment`;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = fetchReview(filmId, rating, comment);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${filmId}`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `${AppRoute.FILMS}/${filmId}`,
        });
      });
  });
});

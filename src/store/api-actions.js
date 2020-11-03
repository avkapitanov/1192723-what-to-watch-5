import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(ActionCreator.loadFilms(data)))
);

export const fetchMyFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadMyFilms(data)))
);

export const fetchAddToMyList = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => dispatch(ActionCreator.changeFavoriteStatus(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(ActionCreator.requireAuthorization(
        AuthorizationStatus.AUTH, data
    )))
    .catch(() => {})
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(ActionCreator.loadPromoFilm(data)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(ActionCreator.requireAuthorization(
        AuthorizationStatus.AUTH, data
    )))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);

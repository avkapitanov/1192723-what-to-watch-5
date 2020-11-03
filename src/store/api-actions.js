import {loadFilms, loadMyFilms, requireAuthorization, loadPromoFilm, redirectToRoute, getReviewsForFilm, changeFavoriteStatus, loadFilm} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const fetchMyFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadMyFilms(data)))
);

export const fetchAddToMyList = (id, status, isPromo) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => dispatch(changeFavoriteStatus(data, isPromo)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(requireAuthorization(
        AuthorizationStatus.AUTH, data
    )))
    .catch(() => {})
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoFilm(data)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => dispatch(requireAuthorization(
        AuthorizationStatus.AUTH, data
    )))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const fetchFilmCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(getReviewsForFilm(data)))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
    .then(({data}) => dispatch(loadFilm(data)))
);

export const fetchReview = (id, rating, comment, callback) => (dispatch, _getState, api) => (
  api.post(`/comments1/${id}`, {rating, comment})
    .then(() => dispatch(redirectToRoute(`/films/${id}`)))
    .catch(() => {
      callback();
    })
);


import {loadFilms, loadMyFilms, requireAuthorization, loadPromoFilm, redirectToRoute, getReviewsForFilm, changeFavoriteStatus, loadFilm} from "./action";
import {APIRoute, AppRoute, AuthorizationStatus} from "../const";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(data)))
);

export const fetchMyFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadMyFilms(data)))
);

export const fetchAddToMyList = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(changeFavoriteStatus(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => dispatch(requireAuthorization(
        AuthorizationStatus.AUTH, data
    )))
    .catch(() => {})
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(loadPromoFilm(data)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(requireAuthorization(
        AuthorizationStatus.AUTH, data
    )))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
);

export const fetchFilmCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(getReviewsForFilm(data)))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(loadFilm(data)))
);

export const fetchReview = (id, rating, comment, callback) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}/${id}`)))
    .catch(() => {
      callback();
    })
);


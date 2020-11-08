import {loadFilms, loadMyFilms, requireAuthorization, loadPromoFilm, redirectToRoute, getReviewsForFilm, changeFavoriteStatus, loadFilm} from "./action";
import {APIRoute, AuthorizationStatus} from "../const";
import {adaptFilmToClient, getNewFilmsState, getNewMyFilmsState} from "../utils";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(loadFilms(getNewFilmsState(data))))
);

export const fetchMyFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadMyFilms(getNewMyFilmsState(data))))
);

export const fetchAddToMyList = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => dispatch(changeFavoriteStatus(adaptFilmToClient(data))))
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
    .then(({data}) => dispatch(loadPromoFilm(adaptFilmToClient(data))))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(requireAuthorization(
        AuthorizationStatus.AUTH, data
    )))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const fetchFilmCommentsList = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(getReviewsForFilm(data)))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(loadFilm(adaptFilmToClient(data))))
);

export const fetchReview = (id, rating, comment, callback) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then(() => dispatch(redirectToRoute(`${APIRoute.FILMS}/${id}`)))
    .catch(() => {
      callback();
    })
);


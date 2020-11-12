import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {normalizedFilms} from "../../mocks/films";
import {authInfo} from "../../mocks/users";

import {AuthorizationStatus} from "../../const";
import FilmAddReviewPage from "./film-add-review-page";

const mockStore = configureStore([]);
const store = mockStore({
  DATA: {
    films: {
      entities: normalizedFilms
    },
    filmId: 1
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo
  }
});

it(`FilmAddReviewPage component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <FilmAddReviewPage
            fetchFilmForReview={() => {}}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});



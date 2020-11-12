import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {AuthorizationStatus} from "../../const";
import {normalizedFilms} from "../../mocks/films";
import {authInfo} from "../../mocks/users";
import {reviews} from "../../mocks/reviews";
import FilmPage from "./film-page";

const mockStore = configureStore([]);
const store = mockStore({
  DATA: {
    films: {
      entities: normalizedFilms
    },
    filmId: 1,
    reviews
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo
  }
});

it(`FilmPage component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <FilmPage />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});



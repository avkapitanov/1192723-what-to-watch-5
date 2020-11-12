import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {normalizedFilms} from "../../mocks/films";
import {filterGenres} from "../../mocks/filters";
import {authInfo} from "../../mocks/users";

import {AuthorizationStatus, DEFAULT_GENRE_FILTER_VALUE} from "../../const";
import App from "./app";

const mockStore = configureStore([]);
const store = mockStore({
  DATA: {
    films: {
      entities: normalizedFilms
    },
    promoId: 3,
    filterGenres,
  },
  PROCESS: {
    selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
    isLoading: false
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo
  }
});

it(`Render App`, () => {
  const tree = renderer
      .create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <App />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});

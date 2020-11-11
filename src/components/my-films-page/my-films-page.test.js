import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {AuthorizationStatus} from "../../const";
import {normalizedFilms} from "../../mocks/films";
import {MyFilmsPage} from "./my-films-page";

const films = Object.values(normalizedFilms);

const mockStore = configureStore([]);
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: {}
  }
});

it(`MyFilmsPage component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <MyFilmsPage
            films={films}
            fetchMyFilms={() => {}}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

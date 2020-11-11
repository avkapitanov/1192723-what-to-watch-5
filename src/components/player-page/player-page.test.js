import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {normalizedFilms} from "../../mocks/films";
import PlayerPage from "./player-page";

const films = Object.values(normalizedFilms);

const mockStore = configureStore([]);
const store = mockStore({
  DATA: {
    films: {
      entities: films
    },
    filmId: 1
  }
});

it(`PlayerPage component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <PlayerPage
            fetchFilm={() => {}}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});



import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {AuthorizationStatus, DEFAULT_GENRE_FILTER_VALUE} from "../../const";
import {normalizedFilms} from "../../mocks/films";

const mockStore = configureStore([]);
const store = mockStore({
  DATA: {
    films: {
      entities: normalizedFilms
    },
    promoId: 3,
    filterGenres: [
      `All genres`,
      `Drama`,
      `Comedy`,
      `Horror`,
      `Romance`,
      `Sci-Fi`
    ],
  },
  PROCESS: {
    selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
    isLoading: false
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo: {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`
    }
  }
});

it(`MainPage component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <MainPage
            fetchMyFilms={() => {}}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

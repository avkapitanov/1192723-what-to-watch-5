import React from "react";
import renderer from "react-test-renderer";
import PromoFilm from "./promo-film";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {AuthorizationStatus} from "../../const";

const films = {
  "1": {
    id: 1,
    title: `We need to talk about Kevin`,
    genre: [`Drama`],
    year: 2011,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/We_need_to_talk_about_Kevin.jpg`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/We_need_to_talk_about_Kevin.jpg`,
    background: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/We_need_to_talk_about_Kevin.jpg`,
    video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    backgroundColor: `#E1DFDE`,
    rating: 3.8,
    scoresCount: 123240,
    description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
    director: `Lynne Ramsay`,
    starring: [
      `Tilda Swinton`,
      `John C. Reilly`,
      `Ezra Miller`
    ],
    runTime: 112,
    isFavorite: false
  }
};

const mockStore = configureStore([]);
const store = mockStore({
  DATA: {
    films: {
      entities: films
    },
    promoId: 1
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

it(`PromoFilm component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <PromoFilm/>
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

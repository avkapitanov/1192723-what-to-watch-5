import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {AuthorizationStatus, DEFAULT_GENRE_FILTER_VALUE} from "../../const";

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
  },
  "2": {
    id: 2,
    title: `What We Do in the Shadows`,
    genre: [`Comedy`],
    year: 2019,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/What-We-Do-in-the-Shadows.jpg`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/What-We-Do-in-the-Shadows.jpg`,
    background: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/What-We-Do-in-the-Shadows.jpg`,
    video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `#A39E81`,
    rating: 7.2,
    scoresCount: 6173,
    description: `A look into the daily (or rather, nightly) lives of three vampires who've lived together for over 100 years, in Staten Island.`,
    director: `Jemaine Clement`,
    starring: [
      `Kayvan Novak`,
      `Matt Berry`,
      `Natasia Demetriou`
    ],
    runTime: 30,
    isFavorite: false
  },
  "3": {
    id: 3,
    title: `Bronson`,
    genre: [`Action`],
    year: 2008,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    posterImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    background: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `#73B39A`,
    rating: 3.6,
    scoresCount: 109661,
    description: `A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.`,
    director: `Nicolas Winding Refn`,
    starring: [
      `Tom Hardy`,
      `Kelly Adams`,
      `Luing Andrews`
    ],
    runTime: 92,
    isFavorite: false
  }
};

const mockStore = configureStore([]);
const store = mockStore({
  DATA: {
    films: {
      entities: films
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

describe(`Render App`, () => {
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
});

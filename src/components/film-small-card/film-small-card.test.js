import React from "react";
import renderer from "react-test-renderer";
import FilmSmallCard from "./film-small-card";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

const film = {
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
};

describe(`FilmSmallCard component render correctly`, () => {
  it(`With poster`, () => {
    const tree = renderer.create(
        <BrowserRouter history={browserHistory}>
          <FilmSmallCard
            film={film}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


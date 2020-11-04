import React from "react";
import renderer from "react-test-renderer";
import FilmPageOverviewTab from "./film-page-overview-tab";

const film = {
  id: 3,
  title: ``,
  genre: [],
  year: 0,
  poster: ``,
  posterImage: ``,
  background: ``,
  video: ``,
  previewVideoLink: ``,
  backgroundColor: ``,
  rating: 9.2,
  scoresCount: 201,
  description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
  director: `Lynne Ramsay`,
  starring: [
    `Tilda Swinton`,
    `John C. Reilly`,
    `Ezra Miller`
  ],
  runTime: 0,
  isFavorite: false
};

it(`FilmPageOverviewTab component render correctly`, () => {
  const tree = renderer.create(
      <FilmPageOverviewTab
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

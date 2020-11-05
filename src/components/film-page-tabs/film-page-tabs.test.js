import React from "react";
import renderer from "react-test-renderer";
import {FilmPageTabs} from "./film-page-tabs";

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

const reviews = [
  {
    id: 1,
    user: {
      id: 16,
      name: `Mollie`
    },
    rating: 3.3,
    comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    date: `2020-10-30T11:53:40.154Z`
  },
  {
    id: 2,
    user: {
      id: 15,
      name: `Kendall`
    },
    rating: 9.4,
    comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    date: `2020-10-13T11:53:40.154Z`
  },
  {
    id: 3,
    user: {
      id: 13,
      name: `Zak`
    },
    rating: 3.3,
    comment: `This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction. I was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.`,
    date: `2020-10-06T11:53:40.154Z`
  }
];

const tabs = [
  `Overview`,
  `Details`,
  `Reviews`
];

describe(`FilmPageTabs component render correctly`, () => {
  it(`Active Tab Overview`, () => {
    const tree = renderer.create(
        <FilmPageTabs
          film={film}
          tabs={tabs}
          activeTab={`Overview`}
          reviews={reviews}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Active Tab Details`, () => {
    const tree = renderer.create(
        <FilmPageTabs
          film={film}
          tabs={tabs}
          activeTab={`Details`}
          reviews={reviews}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Active Tab Reviews`, () => {
    const tree = renderer.create(
        <FilmPageTabs
          film={film}
          tabs={tabs}
          activeTab={`Reviews`}
          reviews={reviews}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



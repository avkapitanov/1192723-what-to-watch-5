import React from "react";
import renderer from "react-test-renderer";
import {FilmAddReviewForm} from "./film-add-review-form";

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

const noop = () => {};

describe(`FilmAddReviewForm component render correctly`, () => {
  it(`Init state`, () => {
    const tree = renderer.create(
        <FilmAddReviewForm
          film={film}
          onFormChange={noop}
          onSubmitForm={noop}
          rating={`3`}
          reviewText={``}
          hasTextError={false}
          isDisabled={false}
          hasError={false}
          setSubmitProcess={noop}
          onError={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With error`, () => {
    const tree = renderer.create(
        <FilmAddReviewForm
          film={film}
          onFormChange={noop}
          onSubmitForm={noop}
          rating={`3`}
          reviewText={``}
          hasTextError={false}
          isDisabled={false}
          hasError={true}
          setSubmitProcess={noop}
          onError={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With text length error`, () => {
    const tree = renderer.create(
        <FilmAddReviewForm
          film={film}
          onFormChange={noop}
          onSubmitForm={noop}
          rating={`3`}
          reviewText={``}
          hasTextError={true}
          isDisabled={false}
          hasError={false}
          setSubmitProcess={noop}
          onError={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



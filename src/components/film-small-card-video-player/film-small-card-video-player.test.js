import React from "react";
import renderer from "react-test-renderer";
import FilmSmallCardVideoPlayer from "./film-small-card-video-player";

const realUseState = React.useState;
jest
  .spyOn(React, `useState`)
  .mockImplementationOnce(() => realUseState(true))
  .mockImplementationOnce(() => realUseState(false));

const src = `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`;
const poster = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;

describe(`FilmSmallCardVideoPlayer component render correct`, () => {
  it(`With loader`, () => {
    const tree = renderer.create(
        <FilmSmallCardVideoPlayer
          src={src}
          poster={poster}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`With video`, () => {
    const tree = renderer.create(
        <FilmSmallCardVideoPlayer
          src={src}
          poster={poster}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});



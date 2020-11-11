import React from "react";
import renderer from "react-test-renderer";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {film} from "../../mocks/film";
import FilmSmallCardImage from "./film-small-card-image";

describe(`FilmSmallCardImage component render correctly`, () => {
  it(`With poster`, () => {
    const tree = renderer.create(
        <BrowserRouter history={browserHistory}>
          <FilmSmallCardImage
            film={film}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


import React from "react";
import renderer from "react-test-renderer";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {film} from "../../mocks/film";
import FilmSmallCard from "./film-small-card";

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


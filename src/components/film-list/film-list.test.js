import React from "react";
import renderer from "react-test-renderer";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {normalizedFilms} from "../../mocks/films";
import FilmList from "./film-list";

const films = Object.values(normalizedFilms);

describe(`FilmList component render correctly`, () => {
  it(`With one element`, () => {
    const tree = renderer.create(
        <BrowserRouter history={browserHistory}>
          <FilmList
            films={films}
            perPage={1}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With two elements`, () => {
    const tree = renderer.create(
        <BrowserRouter history={browserHistory}>
          <FilmList
            films={films}
            perPage={2}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



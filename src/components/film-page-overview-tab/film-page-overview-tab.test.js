import React from "react";
import renderer from "react-test-renderer";

import {film} from "../../mocks/film";
import FilmPageOverviewTab from "./film-page-overview-tab";

it(`FilmPageOverviewTab component render correctly`, () => {
  const tree = renderer.create(
      <FilmPageOverviewTab
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

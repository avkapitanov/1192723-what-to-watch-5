import React from "react";
import renderer from "react-test-renderer";

import {film} from "../../mocks/film";
import FilmPageDetailsTab from "./film-page-details-tab";

it(`FilmPageDetailsTab component render correctly`, () => {
  const tree = renderer.create(
      <FilmPageDetailsTab
        film={film}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

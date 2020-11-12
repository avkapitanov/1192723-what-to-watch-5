import React from "react";
import renderer from "react-test-renderer";

import {filterGenres, selectedFilterGenre} from "../../mocks/filters";
import {FilmsFilter} from "./films-filter";

it(`FilmsFilter component render correctly`, () => {
  const tree = renderer.create(
      <FilmsFilter
        filterGenres={filterGenres}
        selectedFilterGenre={selectedFilterGenre}
        onChangeFilterGenre={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

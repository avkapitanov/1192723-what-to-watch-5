import React from "react";
import renderer from "react-test-renderer";
import {FilmsFilter} from "./films-filter";
import {filterGenres} from "../../mocks/filters";

const selectedFilterGenre = `Drama`;

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

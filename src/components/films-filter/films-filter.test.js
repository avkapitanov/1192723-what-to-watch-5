import React from "react";
import renderer from "react-test-renderer";
import {FilmsFilter} from "./films-filter";

const filterGenres = [
  `All genres`,
  `Drama`,
  `Comedy`,
  `Horror`,
  `Romance`,
  `Sci-Fi`
];

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

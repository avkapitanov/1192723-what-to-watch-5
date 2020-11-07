import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {FilmsFilter} from "./films-filter";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Filter change link be pressed two times`, () => {
  const handleChangeFilterGenre = jest.fn();

  const filterGenres = [
    `All genres`,
    `Drama`,
    `Comedy`,
    `Horror`,
    `Romance`,
    `Sci-Fi`
  ];

  const selectedFilter = `All genres`;

  const wrapper = shallow(
      <FilmsFilter
        onChangeFilterGenre={handleChangeFilterGenre}
        selectedFilterGenre={selectedFilter}
        filterGenres={filterGenres}
      />
  );

  const filterGenreLink = wrapper.find(`.catalog__genres-item:first-child .catalog__genres-link`);
  const filterGenreLinkLast = wrapper.find(`.catalog__genres-item:last-child .catalog__genres-link`);
  filterGenreLink.simulate(`click`, {
    preventDefault: () => {}
  });
  filterGenreLinkLast.simulate(`click`, {
    preventDefault: () => {}
  });
  expect(handleChangeFilterGenre).toHaveBeenCalledTimes(2);
});

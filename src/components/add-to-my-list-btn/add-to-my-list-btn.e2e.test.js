import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {AddToMyListBtn} from "./add-to-my-list-btn";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Add to my list button be pressed`, () => {
  const handleAddToMyListBtnClick = jest.fn();

  const wrapper = shallow(
      <AddToMyListBtn
        onAddToMyListBtnClick={handleAddToMyListBtnClick}
        filmId={1}
        isFavorite={false}
        isPromo={false}
        isLogged={true}
      />
  );

  const addToMyListButton = wrapper.find(`.movie-card__button`);
  addToMyListButton.simulate(`click`, {
    preventDefault: () => {}
  });
  expect(handleAddToMyListBtnClick).toHaveBeenCalledTimes(1);
});

import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ShowMoreFilmsBtn from "./show-more-films-btn";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Show more button be pressed`, () => {
  const handleShowMoreBtnClick = jest.fn();

  const wrapper = shallow(
      <ShowMoreFilmsBtn
        onChangeFilmsCount={handleShowMoreBtnClick}
      />
  );

  const showMoreBtn = wrapper.find(`.catalog__button`);
  showMoreBtn.simulate(`click`, {
    preventDefault: () => {}
  });
  expect(handleShowMoreBtnClick).toHaveBeenCalledTimes(1);
});

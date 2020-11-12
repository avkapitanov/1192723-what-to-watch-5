import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import RatingStar from "./rating-star";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should first star be pressed`, () => {
  const handleInputRatingClick = jest.fn();

  const wrapper = shallow(
      <RatingStar
        onChangeHandler={handleInputRatingClick}
        maxRating={5}
        isDisabled={false}
      />
  );

  const firstInput = wrapper.find(`#star-1`);
  firstInput.simulate(`change`, {
    preventDefault: () => {}
  });
  expect(handleInputRatingClick).toHaveBeenCalledTimes(1);
});

import React from "react";
import renderer from "react-test-renderer";
import RatingStar from "./rating-star";

describe(`RatingStar component render correctly`, () => {
  it(`Disabled, current 3, max 5`, () => {
    const tree = renderer.create(
        <RatingStar
          currentRating={`3`}
          isDisabled={true}
          maxRating={5}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Enabled, current 2, max 5`, () => {
    const tree = renderer.create(
        <RatingStar
          currentRating={`2`}
          isDisabled={false}
          maxRating={5}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



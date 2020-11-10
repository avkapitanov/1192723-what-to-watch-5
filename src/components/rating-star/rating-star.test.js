import React from "react";
import renderer from "react-test-renderer";
import RatingStar from "./rating-star";

const noop = () => {};

describe(`RatingStar component render correctly`, () => {
  it(`Disabled, max 5`, () => {
    const tree = renderer.create(
        <RatingStar
          isDisabled={true}
          maxRating={5}
          onChangeHandler={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Enabled, max 5`, () => {
    const tree = renderer.create(
        <RatingStar
          isDisabled={false}
          maxRating={5}
          onChangeHandler={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



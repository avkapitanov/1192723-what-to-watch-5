import React from "react";
import renderer from "react-test-renderer";
import Loader from "./loader";

describe(`Loader component render correctly`, () => {
  it(`Loader with loading`, () => {
    const tree = renderer.create(
        <Loader
          isLoading={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Loader without loading`, () => {
    const tree = renderer.create(
        <Loader
          isLoading={false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

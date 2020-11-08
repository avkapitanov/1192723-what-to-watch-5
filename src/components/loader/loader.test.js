import React from "react";
import renderer from "react-test-renderer";
import Loader from "./loader";

describe(`Loader component render correctly`, () => {
  it(`With loading`, () => {
    const tree = renderer.create(
        <Loader
          isLoading={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

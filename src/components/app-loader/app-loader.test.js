import React from "react";
import renderer from "react-test-renderer";
import AppLoader from "./app-loader";

it(`AppLoader component render correctly`, () => {
  const tree = renderer.create(
      <AppLoader />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

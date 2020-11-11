import React from "react";
import renderer from "react-test-renderer";

import ShowMoreFilmsBtn from "./show-more-films-btn";

it(`ShowMoreFilmsBtn component render correctly`, () => {
  const tree = renderer.create(
      <ShowMoreFilmsBtn
        onChangeFilmsCount={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

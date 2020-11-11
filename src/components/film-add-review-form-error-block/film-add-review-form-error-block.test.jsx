import React from "react";
import renderer from "react-test-renderer";

import FilmAddReviewFormErrorBlock from "./film-add-review-form-error-block";

const errorText = `Something wrong, please, try again later`;

it(`FilmAddReviewFormErrorBlock component render correctly`, () => {
  const tree = renderer.create(
      <FilmAddReviewFormErrorBlock
        errorText={errorText}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});



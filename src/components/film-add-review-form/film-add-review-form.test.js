import React from "react";
import renderer from "react-test-renderer";

import {film} from "../../mocks/film";
import {FilmAddReviewForm} from "./film-add-review-form";

it(`FilmAddReviewForm component render correctly`, () => {
  const tree = renderer.create(
      <FilmAddReviewForm
        film={film}
        onSubmitForm={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

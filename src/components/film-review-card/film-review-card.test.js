import React from "react";
import renderer from "react-test-renderer";

import {review} from "../../mocks/reviews";
import FilmReviewCard from "./film-review-card";

it(`FilmReviewCard component render correctly`, () => {
  const tree = renderer.create(
      <FilmReviewCard
        review={review}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

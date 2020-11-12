import React from "react";
import renderer from "react-test-renderer";

import {reviews} from "../../mocks/reviews";
import FilmPageReviewsTab from "./film-page-reviews-tab";

it(`FilmPageReviewsTab component render correctly`, () => {
  const tree = renderer.create(
      <FilmPageReviewsTab
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

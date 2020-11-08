import React from "react";
import renderer from "react-test-renderer";
import FilmReviewCard from "./film-review-card";

const review = {
  id: 1,
  user: {
    id: 16,
    name: `Mollie`
  },
  rating: 3.3,
  comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
  date: `2020-10-30T11:53:40.154Z`
};

it(`FilmReviewCard component render correctly`, () => {
  const tree = renderer.create(
      <FilmReviewCard
        review={review}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

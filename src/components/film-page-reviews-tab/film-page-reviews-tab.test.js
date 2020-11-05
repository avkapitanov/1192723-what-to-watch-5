import React from "react";
import renderer from "react-test-renderer";
import FilmPageReviewsTab from "./film-page-reviews-tab";

const reviews = [
  {
    id: 1,
    user: {
      id: 16,
      name: `Mollie`
    },
    rating: 3.3,
    comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    date: `2020-10-30T11:53:40.154Z`
  },
  {
    id: 2,
    user: {
      id: 15,
      name: `Kendall`
    },
    rating: 9.4,
    comment: `I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen.`,
    date: `2020-10-13T11:53:40.154Z`
  },
  {
    id: 3,
    user: {
      id: 13,
      name: `Zak`
    },
    rating: 3.3,
    comment: `This movie is perfect in all its categories: credits, sound track, production, casting, writing, photography, editing, acting, and direction. I was amazed with the freedom of the use of the camera. This movie will change the way movies are made. Slow-mo, stills, black and white, and color were all used to brilliant effect.`,
    date: `2020-10-06T11:53:40.154Z`
  }
];

it(`FilmPageReviewsTab component render correctly`, () => {
  const tree = renderer.create(
      <FilmPageReviewsTab
        reviews={reviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

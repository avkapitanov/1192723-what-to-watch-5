import React from "react";
import renderer from "react-test-renderer";
import FilmAddReviewFormErrorBlock from "./film-add-review-form-error-block";

const errorText = `Something wrong, please, try again later`;

describe(`FilmAddReviewFormErrorBlock component render correctly`, () => {
  it(`With error`, () => {
    const tree = renderer.create(
        <FilmAddReviewFormErrorBlock
          errorText={errorText}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



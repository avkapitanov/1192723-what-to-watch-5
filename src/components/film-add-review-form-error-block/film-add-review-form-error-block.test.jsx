import React from "react";
import renderer from "react-test-renderer";
import FilmAddReviewFormErrorBlock from "./film-add-review-form-error-block";

describe(`FilmAddReviewFormErrorBlock component render correctly`, () => {
  it(`With error`, () => {
    const tree = renderer.create(
        <FilmAddReviewFormErrorBlock
          hasError={true}
          onChangeFilmsCount={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Without error`, () => {
    const tree = renderer.create(
        <FilmAddReviewFormErrorBlock
          hasError={false}
          onChangeFilmsCount={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



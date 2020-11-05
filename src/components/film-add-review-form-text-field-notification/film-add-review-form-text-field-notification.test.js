import React from "react";
import renderer from "react-test-renderer";
import FilmAddReviewFormTextFieldNotification from "./film-add-review-form-text-field-notification";
import {MAX_REVIEW_TEXT, MIN_REVIEW_TEXT} from "../../const";

describe(`FilmAddReviewFormTextFieldNotification component render correctly`, () => {
  it(`With min length error`, () => {
    const tree = renderer.create(
        <FilmAddReviewFormTextFieldNotification
          textLength={MIN_REVIEW_TEXT - 1}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Without error`, () => {
    const tree = renderer.create(
        <FilmAddReviewFormTextFieldNotification
          textLength={MIN_REVIEW_TEXT}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With max length error`, () => {
    const tree = renderer.create(
        <FilmAddReviewFormTextFieldNotification
          textLength={MAX_REVIEW_TEXT + 1}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {film} from "../../mocks/film";
import {FilmAddReviewForm} from "./film-add-review-form";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Add Review Form was sent`, () => {
  const handleSubmit = jest.fn();

  const wrapper = shallow(
      <FilmAddReviewForm
        onSubmitForm={handleSubmit}
        film={film}
      />
  );

  const addReviewForm = wrapper.find(`.add-review__form`);
  const formSendPrevention = jest.fn();
  addReviewForm.simulate(`submit`, {
    preventDefault: formSendPrevention
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

import React from "react";
import renderer from "react-test-renderer";

import {LoginForm} from "./login-form";

const realUseState = React.useState;
jest
  .spyOn(React, `useState`)
  .mockImplementationOnce(() => realUseState())
  .mockImplementationOnce(() => realUseState())
  .mockImplementationOnce(() => realUseState(true))
  .mockImplementationOnce(() => realUseState())
  .mockImplementationOnce(() => realUseState())
  .mockImplementationOnce(() => realUseState(true));

describe(`LoginForm component render correct`, () => {
  it(`No errors`, () => {
    const tree = renderer.create(
        <LoginForm
          onSubmit={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Email error`, () => {
    const tree = renderer.create(
        <LoginForm
          onSubmit={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`Password error`, () => {
    const tree = renderer.create(
        <LoginForm
          onSubmit={() => {}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});



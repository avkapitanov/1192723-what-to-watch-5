import React from "react";
import renderer from "react-test-renderer";
import {LoginPage} from "./login-page";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

it(`LoginPage component render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter history={browserHistory}>
        <LoginPage
          onSubmit={() => {}}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

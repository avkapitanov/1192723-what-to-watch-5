import React from "react";
import renderer from "react-test-renderer";
import PageFooter from "./page-footer";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

it(`PageFooter component render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter history={browserHistory}>
        <PageFooter />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


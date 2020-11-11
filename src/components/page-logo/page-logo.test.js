import React from "react";
import renderer from "react-test-renderer";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import PageLogo from "./page-logo";

describe(`PageLogo component render correctly`, () => {
  it(`Header without props`, () => {
    const tree = renderer.create(
        <BrowserRouter history={browserHistory}>
          <PageLogo />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Header with prop`, () => {
    const tree = renderer.create(
        <BrowserRouter history={browserHistory}>
          <PageLogo
            isFooter={false}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Footer`, () => {
    const tree = renderer.create(
        <BrowserRouter history={browserHistory}>
          <PageLogo
            isFooter={true}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

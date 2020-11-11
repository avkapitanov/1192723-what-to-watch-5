import React from "react";
import renderer from "react-test-renderer";

import {activeTab} from "../../mocks/tabs";
import FilmPageTabsNavItem from "./film-page-tabs-nav-item";

describe(`FilmPageTabsNavItem component render correctly`, () => {
  it(`Active tab`, () => {
    const tree = renderer.create(
        <FilmPageTabsNavItem
          isActive={true}
          tabName={activeTab}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Inactive tab`, () => {
    const tree = renderer.create(
        <FilmPageTabsNavItem
          isActive={false}
          tabName={activeTab}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


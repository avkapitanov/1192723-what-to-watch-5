import React from "react";
import renderer from "react-test-renderer";
import FilmPageTabsNavItem from "./film-page-tabs-nav-item";

const tabName = `Overview`;

describe(`FilmPageTabsNavItem component render correctly`, () => {
  it(`Active tab`, () => {
    const tree = renderer.create(
        <FilmPageTabsNavItem
          isActive={true}
          tabName={tabName}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Inactive tab`, () => {
    const tree = renderer.create(
        <FilmPageTabsNavItem
          isActive={false}
          tabName={tabName}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


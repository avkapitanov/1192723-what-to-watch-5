import React from "react";
import renderer from "react-test-renderer";
import FilmPageTabsNav from "./film-page-tabs-nav";

const tabs = [
  `Overview`,
  `Details`,
  `Reviews`
];

const activeTab = `Overview`;

it(`FilmPageTabsNav component render correctly`, () => {
  const tree = renderer.create(
      <FilmPageTabsNav
        tabs={tabs}
        activeTab={activeTab}
        onActiveTabChange={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

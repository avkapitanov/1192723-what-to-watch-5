import React from "react";
import renderer from "react-test-renderer";

import {tabs, activeTab} from "../../mocks/tabs";
import FilmPageTabsNav from "./film-page-tabs-nav";

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

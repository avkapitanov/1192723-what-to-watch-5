import React from "react";
import renderer from "react-test-renderer";

import {film} from "../../mocks/film";
import {reviews} from "../../mocks/reviews";
import {tabs} from "../../mocks/tabs";
import FilmPageTabs from "./film-page-tabs";

describe(`FilmPageTabs component render correctly`, () => {
  it(`Active Tab Overview`, () => {
    const tree = renderer.create(
        <FilmPageTabs
          film={film}
          tabs={tabs}
          activeTab={`Overview`}
          reviews={reviews}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Active Tab Details`, () => {
    const tree = renderer.create(
        <FilmPageTabs
          film={film}
          tabs={tabs}
          activeTab={`Details`}
          reviews={reviews}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Active Tab Reviews`, () => {
    const tree = renderer.create(
        <FilmPageTabs
          film={film}
          tabs={tabs}
          activeTab={`Reviews`}
          reviews={reviews}
          onActiveTabChange={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



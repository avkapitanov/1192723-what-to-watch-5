import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilmPageTabsNavItem from "./film-page-tabs-nav-item";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should Film Tabs Link be pressed`, () => {
  const handleActiveTabChange = jest.fn();

  const wrapper = shallow(
      <FilmPageTabsNavItem
        onActiveTabChange={handleActiveTabChange}
        isActive={false}
        tabName={`Overview`}
      />
  );

  const tabLink = wrapper.find(`.movie-nav__link`);
  tabLink.simulate(`click`, {
    preventDefault: () => {}
  });
  expect(handleActiveTabChange).toHaveBeenCalledTimes(1);
});

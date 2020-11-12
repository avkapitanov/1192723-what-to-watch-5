import React from "react";
import PropTypes from "prop-types";

import FilmPageTabsNavItem from "../film-page-tabs-nav-item/film-page-tabs-nav-item";

const FilmPageTabsNav = (props) => {
  const {tabs, activeTab, onActiveTabChange} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {
          tabs.map((tab) =>
            <FilmPageTabsNavItem
              key={tab}
              isActive={activeTab === tab}
              onActiveTabChange={(evt) => {
                evt.preventDefault();
                onActiveTabChange(tab);
              }}
              tabName={tab}
            />
          )
        }
      </ul>
    </nav>
  );
};

FilmPageTabsNav.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
};

export default FilmPageTabsNav;

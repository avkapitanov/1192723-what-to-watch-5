import React from "react";
import PropTypes from "prop-types";
import FilmPageTabsNavItem from "../film-page-tabs-nav-item/film-page-tabs-nav-item";
import {FilmTab} from "../../const";

const FilmPageTabsNav = (props) => {
  const {activeTab, onActiveTabChange} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {
          Object.values(FilmTab).map((tab) =>
            <FilmPageTabsNavItem
              key={tab}
              isActive={activeTab === tab}
              onActiveTabChange={onActiveTabChange}
              tabName={tab}
            />
          )
        }
      </ul>
    </nav>
  );
};

FilmPageTabsNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
};

export default FilmPageTabsNav;

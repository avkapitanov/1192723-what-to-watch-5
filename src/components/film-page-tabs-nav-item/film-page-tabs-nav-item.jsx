import React from "react";
import PropTypes from "prop-types";

const FilmPageTabsNavItem = (props) => {
  const {isActive, onActiveTabChange, tabName} = props;

  return (
    <li className={`movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`}>
      <a href="#" className="movie-nav__link" onClick={onActiveTabChange}>{tabName}</a>
    </li>
  );
};

FilmPageTabsNavItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
  tabName: PropTypes.string.isRequired
};

export default FilmPageTabsNavItem;

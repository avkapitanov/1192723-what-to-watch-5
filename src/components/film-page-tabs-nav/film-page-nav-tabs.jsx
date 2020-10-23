import React from "react";
import PropTypes from "prop-types";
import {FilmTab} from "../../const";

const FilmPageTabsNav = (props) => {
  const {activeTab, onActiveTabChange} = props;

  const isActiveOverview = (activeTab === FilmTab.OVERVIEW);
  const isActiveDetails = (activeTab === FilmTab.DETAILS);
  const isActiveReviews = (activeTab === FilmTab.REVIEWS);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${isActiveOverview ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" data-tab="overview" onClick={onActiveTabChange}>Overview</a>
        </li>
        <li className={`movie-nav__item ${isActiveDetails ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" data-tab="details" onClick={onActiveTabChange}>Details</a>
        </li>
        <li className={`movie-nav__item ${isActiveReviews ? `movie-nav__item--active` : ``}`}>
          <a href="#" className="movie-nav__link" data-tab="reviews" onClick={onActiveTabChange}>Reviews</a>
        </li>
      </ul>
    </nav>
  );
};

FilmPageTabsNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
};

export default FilmPageTabsNav;

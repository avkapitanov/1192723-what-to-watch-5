import React from "react";
import PropTypes from "prop-types";
import withFilmPageTabs from "../../hocs/with-film-page-tabs/with-film-page-tabs";
import FilmPageOverviewTab from "../film-page-overview-tab/film-page-overview-tab";
import FilmPageDetailsTab from "../film-page-details-tab/film-page-details-tab";
import FilmPageReviewsTab from "../film-page-reviews-tab/film-page-reviews-tab";
import FilmPageTabsNav from "../film-page-tabs-nav/film-page-tabs-nav";
import {FilmTab} from "../../const";
import filmProp from "../film-page/film.prop";
import reviewsProp from "../film-page-reviews-tab/reviews.prop";

const FilmPageTabs = (props) => {
  const {tabs, film, activeTab, onActiveTabChange, reviews} = props;

  let tabContent;
  switch (activeTab) {
    case FilmTab.OVERVIEW:
      tabContent = <FilmPageOverviewTab film={film} />;
      break;
    case FilmTab.DETAILS:
      tabContent = <FilmPageDetailsTab film={film} />;
      break;
    case FilmTab.REVIEWS:
      tabContent = <FilmPageReviewsTab reviews={reviews} />;
      break;
  }

  return (
    <div className="movie-card__desc">
      <FilmPageTabsNav tabs={tabs} activeTab={activeTab} onActiveTabChange={onActiveTabChange}/>
      {tabContent}
    </div>
  );
};

export {FilmPageTabs};

FilmPageTabs.propTypes = {
  film: filmProp,
  reviews: reviewsProp,
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
  tabs: PropTypes.array.isRequired
};

export default withFilmPageTabs(FilmPageTabs);

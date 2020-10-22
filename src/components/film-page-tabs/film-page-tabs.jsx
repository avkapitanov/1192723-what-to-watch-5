import React from "react";
import PropTypes from "prop-types";
import reviewsProp from "../film-page-reviews-tab/reviews.prop";
import withFilmPageTabs from "../../hocks/with-film-page-tabs/with-film-page-tabs";
import FilmPageOverviewTab from "../film-page-overview-tab/film-page-overview-tab";
import FilmPageDetailsTab from "../film-page-details-tab/film-page-details-tab";
import FilmPageReviewsTab from "../film-page-reviews-tab/film-page-reviews-tab";
import FilmPageTabsNav from "../film-page-tabs-nav/film-page-nav-tabs";
import {FilmTab} from "../../const";

const FilmPageTabs = (props) => {
  const {activeTab, onActiveTabChange, reviews} = props;

  let tabContent;
  switch (activeTab) {
    case FilmTab.OVERVIEW:
      tabContent = <FilmPageOverviewTab/>;
      break;
    case FilmTab.DETAILS:
      tabContent = <FilmPageDetailsTab/>;
      break;
    case FilmTab.REVIEWS:
      tabContent = <FilmPageReviewsTab reviews={reviews}/>;
      break;
  }

  return (
    <div className="movie-card__desc">
      <FilmPageTabsNav activeTab={activeTab} onActiveTabChange={onActiveTabChange}/>
      {tabContent}
    </div>
  );
};

FilmPageTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
  reviews: reviewsProp
};

export default withFilmPageTabs(FilmPageTabs);

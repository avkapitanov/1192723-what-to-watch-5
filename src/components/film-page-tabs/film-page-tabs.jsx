import React, {useState} from "react";
import PropTypes from "prop-types";
import FilmPageOverviewTab from "../film-page-overview-tab/film-page-overview-tab";
import FilmPageDetailsTab from "../film-page-details-tab/film-page-details-tab";
import FilmPageReviewsTab from "../film-page-reviews-tab/film-page-reviews-tab";
import FilmPageTabsNav from "../film-page-tabs-nav/film-page-tabs-nav";
import {DEFAULT_ACTIVE_TAB, FilmTab} from "../../const";
import filmProp from "../film-page/film.prop";
import reviewsProp from "../film-page-reviews-tab/reviews.prop";

const FilmPageTabs = (props) => {
  const [activeTab, setActiveTab] = useState(DEFAULT_ACTIVE_TAB);
  const {tabs, film, reviews} = props;

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
      <FilmPageTabsNav tabs={tabs} activeTab={activeTab} onActiveTabChange={setActiveTab}/>
      {tabContent}
    </div>
  );
};

FilmPageTabs.propTypes = {
  film: filmProp,
  reviews: reviewsProp,
  tabs: PropTypes.array.isRequired
};

export default FilmPageTabs;

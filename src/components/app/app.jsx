import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import FilmsPage from "../films-page/films-page";
import FilmPage from "../film-page/film-page";
import PlayerPage from "../player-page/player-page";
import PromoFilm from "../promo-film/promo-film";
import FilmReviewsPage from "../film-reviews-page/film-reviews-page";

const App = (props) => {
  const {promoFilm} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <React.Fragment>
            <PromoFilm title={promoFilm.title} genre={promoFilm.genre} year={promoFilm.year}/>
            <MainPage/>
          </React.Fragment>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/mylist">
          <FilmsPage/>
        </Route>
        <Route exact path="/films/:id/review">
          <FilmReviewsPage/>
        </Route>
        <Route exact path="/films/:id">
          <FilmPage/>
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
};

export default App;

import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyFilmsPage from "../my-films-page/my-films-page";
import FilmPage from "../film-page/film-page";
import PlayerPage from "../player-page/player-page";
import PromoFilm from "../promo-film/promo-film";
import FilmReviewsPage from "../film-reviews-page/film-reviews-page";
import filmsProp from "../film-page/films.prop";
import reviewsProp from "../film-reviews-page/reviews.prop";

const App = (props) => {
  const {promoFilm, films, reviews} = props;

  const myFilms = films.slice(0, 5);
  const film = films.slice(0, 1).pop();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <React.Fragment>
            <PromoFilm { ...promoFilm }/>
            <MainPage films={films}/>
          </React.Fragment>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/mylist">
          <MyFilmsPage myFilms={myFilms}/>
        </Route>
        <Route exact path="/films/:id/review">
          <FilmReviewsPage film={film} reviews={reviews}/>
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
  films: filmsProp,
  reviews: reviewsProp
};

export default App;

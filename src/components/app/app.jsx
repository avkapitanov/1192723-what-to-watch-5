import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyFilmsPage from "../my-films-page/my-films-page";
import FilmPage from "../film-page/film-page";
import PlayerPage from "../player-page/player-page";
import PromoFilm from "../promo-film/promo-film";
import filmsProp from "../film-page/films.prop";
import reviewsProp from "../film-page-reviews-tab/reviews.prop";
import FilmAddReviewForm from "../film-add-review-form/film-add-review-form";

const App = (props) => {
  const {promoFilm, films, reviews} = props;

  const myFilms = films.slice(0, 5);
  const [film] = films;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <>
              <PromoFilm { ...promoFilm }/>
              <MainPage films={films} history={history}/>
            </>
          )}>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/mylist">
          <MyFilmsPage myFilms={myFilms}/>
        </Route>
        <Route exact path="/films/:id/review">
          <FilmAddReviewForm film={film}/>
        </Route>
        <Route exact path="/films/:id"
          render={({history}) => (
            <FilmPage film={film} reviews={reviews} films={films} history={history}/>
          )}
        >
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

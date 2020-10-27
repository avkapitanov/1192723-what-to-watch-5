import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyFilmsPage from "../my-films-page/my-films-page";
import FilmPage from "../film-page/film-page";
import PlayerPage from "../player-page/player-page";
import filmsProp from "../film-page/films.prop";
import reviewsProp from "../film-page-reviews-tab/reviews.prop";
import {connect} from "react-redux";
import {filterFilmsByGenre} from "../../utils";
import FilmAddReviewPage from "../film-add-review-page/film-add-review-page";

const App = (props) => {
  const {films, reviews} = props;

  const myFilms = films.slice(0, 5);
  const [film] = films;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mylist">
          <MyFilmsPage myFilms={myFilms}/>
        </Route>
        <Route exact path="/films/:id/review">
          <FilmAddReviewPage film={film}/>
        </Route>
        <Route exact path="/films/:id"
          render={({match, history}) => (
            <FilmPage reviews={reviews} match={match} history={history}/>
          )}
        >
        </Route>
        <Route exact path="/player/:id" component={PlayerPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: filmsProp,
  reviews: reviewsProp
};

export {App};

const mapStateToProps = (state) => ({
  films: filterFilmsByGenre(state.films, state.selectedFilterGenre),
});

export default connect(mapStateToProps)(App);

import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyFilmsPage from "../my-films-page/my-films-page";
import FilmPage from "../film-page/film-page";
import PlayerPage from "../player-page/player-page";
import filmsProp from "../film-page/films.prop";
import {connect} from "react-redux";
import {filterFilmsByGenre} from "../../utils";
import FilmAddReviewPage from "../film-add-review-page/film-add-review-page";
import browserHistory from "../../browser-history";

const App = (props) => {
  const {films} = props;

  const myFilms = films.slice(0, 5);
  const [film] = films;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mylist">
          <MyFilmsPage myFilms={myFilms}/>
        </Route>
        <Route exact path="/films/:id/review">
          <FilmAddReviewPage film={film}/>
        </Route>
        <Route exact path="/films/:id" component={FilmPage} />
        <Route exact path="/player/:id" component={PlayerPage} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: filmsProp
};

export {App};

const mapStateToProps = (state) => ({
  films: filterFilmsByGenre(state.films, state.selectedFilterGenre),
});

export default connect(mapStateToProps)(App);

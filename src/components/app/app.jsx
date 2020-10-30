import React from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import MyFilmsPage from "../my-films-page/my-films-page";
import FilmPage from "../film-page/film-page";
import PlayerPage from "../player-page/player-page";
import FilmAddReviewPage from "../film-add-review-page/film-add-review-page";
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/mylist">
          <MyFilmsPage />
        </Route>
        <Route exact path="/films/:id/review">
          <FilmAddReviewPage />
        </Route>
        <Route exact path="/films/:id" component={FilmPage} />
        <Route exact path="/player/:id" component={PlayerPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

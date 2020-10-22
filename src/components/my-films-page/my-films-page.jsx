import React, {PureComponent} from "react";
import FilmList from "../film-list/film-list";
import filmsProp from "../film-page/films.prop";
import PageFooter from "../page-footer/page-footer";

class MyFilmsPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {myFilms} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmList films={myFilms}/>
        </section>

        <PageFooter/>
      </div>
    );
  }

}

MyFilmsPage.propTypes = {
  myFilms: filmsProp
};

export default MyFilmsPage;
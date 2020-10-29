import React, {PureComponent} from "react";
import FilmList from "../film-list/film-list";
import filmsProp from "../film-page/films.prop";
import PageFooter from "../page-footer/page-footer";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";

class MyFilmsPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {myFilms} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <PageHeaderLogo/>

          <h1 className="page-title user-page__title">My list</h1>

          <UserAvatarBlock/>
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

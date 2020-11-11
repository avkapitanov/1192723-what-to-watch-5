import React, {useEffect} from "react";
import PropTypes from "prop-types";
import filmsProp from "../film-page/films.prop";
import {connect} from "react-redux";

import {fetchMyFilmsList} from "../../store/api-actions";
import {getMyFilms} from "../../store/selectors";

import FilmList from "../film-list/film-list";
import PageFooter from "../page-footer/page-footer";
import PageLogo from "../page-logo/page-logo";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";

const MyFilmsPage = (props) => {
  const {films, fetchMyFilms} = props;

  useEffect(() => {
    fetchMyFilms();
  }, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageLogo/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserAvatarBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={films}/>
      </section>

      <PageFooter/>
    </div>
  );

};

MyFilmsPage.propTypes = {
  films: filmsProp,
  fetchMyFilms: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  films: getMyFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyFilms() {
    dispatch(fetchMyFilmsList());
  }
});

export {MyFilmsPage};

export default connect(mapStateToProps, mapDispatchToProps)(MyFilmsPage);


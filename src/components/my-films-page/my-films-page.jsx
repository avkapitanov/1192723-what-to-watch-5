import React, {PureComponent} from "react";
import FilmList from "../film-list/film-list";
import PageFooter from "../page-footer/page-footer";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";
import {connect} from "react-redux";
import {getMyFilms} from "../../store/selectors";
import filmsProp from "../film-page/films.prop";
import {fetchMyFilmsList} from "../../store/api-actions";
import PropTypes from "prop-types";

class MyFilmsPage extends PureComponent {
  componentDidMount() {
    this.props.fetchMyFilms();
  }

  render() {
    const {films} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <PageHeaderLogo/>

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
  }
}

const mapStateToProps = (state) => ({
  films: getMyFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchMyFilms() {
    dispatch(fetchMyFilmsList());
  }
});

export {MyFilmsPage};

MyFilmsPage.propTypes = {
  films: filmsProp,
  fetchMyFilms: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(MyFilmsPage);


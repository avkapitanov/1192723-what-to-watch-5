import React, {PureComponent} from "react";
import PageFooter from "../page-footer/page-footer";
import FilmPageTabs from "../film-page-tabs/film-page-tabs";
import filmProp from "./film.prop";
import filmsProp from "./films.prop";
import SimilarFilms from "../similar-films/similar-films";
import PropTypes from "prop-types";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";
import {connect} from "react-redux";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import {Link} from "react-router-dom";
import {getFilmById} from "../../store/selectors";

class FilmPage extends PureComponent {
  constructor(props) {
    super(props);

    this.handlePlayBtnClick = (evt) => {
      evt.preventDefault();
      const {history} = this.props;
      history.push(`/player/` + evt.target.closest(`button`).dataset.id);
    };
  }

  render() {
    const {film, films} = this.props;

    const similarFilms = films.filter((f) => {
      const similarGenres = f.genre.filter((genre) => {
        return film.genre.includes(genre) && film.id !== f.id;
      });
      return similarGenres.length > 0;
    }).slice(0, 4);

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={film.background} alt={film.title}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <PageHeaderLogo/>

              <UserAvatarBlock/>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{film.genre.join(`, `)}</span>
                  <span className="movie-card__year">{film.year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" data-id={film.id} onClick={this.handlePlayBtnClick}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                  <Link to={{
                    pathname: `/films/${film.id}/review`
                  }}
                  className="btn movie-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={film.posterImage} alt={film.title + ` poster`} width="218" height="327"/>
              </div>

              <FilmPageTabs film={film}/>
            </div>
          </div>
        </section>

        <div className="page-content">
          <SimilarFilms similarFilms={similarFilms}/>

          <PageFooter/>
        </div>
      </>
    );
  }
}

FilmPage.propTypes = {
  film: filmProp,
  films: filmsProp,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export {FilmPage};

const mapStateToProps = ({DATA}, props) => ({
  films: DATA.films,
  film: getFilmById(DATA, props)
});

export default connect(mapStateToProps)(FilmPage);

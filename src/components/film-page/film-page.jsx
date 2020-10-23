import React from "react";
import PageFooter from "../page-footer/page-footer";
import FilmPageTabs from "../film-page-tabs/film-page-tabs";
import reviewsProp from "../film-page-reviews-tab/reviews.prop";
import filmProp from "./film.prop";
import filmsProp from "./films.prop";
import SimilarFilms from "../similar-films/similar-films";
import PropTypes from "prop-types";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";

const FilmPage = (props) => {
  const {film, reviews, films, history} = props;

  const similarFilms = films.filter((f) => {
    const similarGenres = f.genre.filter((genre) => {
      return film.genre.includes(genre);
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
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <UserAvatarBlock/>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{film.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">Drama</span>
                  <span className="movie-card__year">{film.year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
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
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src="/img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
              </div>

              <FilmPageTabs film={film} reviews={reviews}/>
            </div>
          </div>
        </section>

        <div className="page-content">
          <SimilarFilms similarFilms={similarFilms} history={history}/>

          <PageFooter/>
        </div>
      </>
  );
};

FilmPage.propTypes = {
  reviews: reviewsProp,
  film: filmProp,
  films: filmsProp,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default FilmPage;

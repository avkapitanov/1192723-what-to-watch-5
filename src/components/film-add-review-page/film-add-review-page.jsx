import React, {useEffect} from "react";
import PropTypes from "prop-types";
import filmProp from "../film-page/film.prop";
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";

import {fetchFilm} from "../../store/api-actions";
import {getFilm} from "../../store/selectors";

import UserAvatarBlock from "../user-avatar-block/user-avatar-block";
import PageLogo from "../page-logo/page-logo";
import FilmAddReviewForm from "../film-add-review-form/film-add-review-form";

const FilmAddReviewPage = (props) => {
  const match = useParams();
  const {film, fetchFilmForReview} = props;

  useEffect(() => {
    fetchFilmForReview(match.id);
  }, [match.id]);

  if (!film) {
    return null;
  }

  const movieCardStyle = {
    background: film.backgroundColor
  };

  return (
    <section className="movie-card movie-card--full" style={movieCardStyle}>
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background} alt={film.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <PageLogo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={{
                  pathname: `/films/${film.id}`
                }}
                className="breadcrumbs__link">{film.title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserAvatarBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={film.title + ` poster`} width="218" height="327"/>
        </div>
      </div>

      <FilmAddReviewForm film={film}/>
    </section>
  );
};

FilmAddReviewPage.propTypes = {
  film: filmProp,
  fetchFilmForReview: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  film: getFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilmForReview(id) {
    dispatch(fetchFilm(id));
  }
});

export {FilmAddReviewPage};

export default connect(mapStateToProps, mapDispatchToProps)(FilmAddReviewPage);

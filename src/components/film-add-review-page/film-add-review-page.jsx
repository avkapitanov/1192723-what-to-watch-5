import React from "react";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import FilmAddReviewForm from "../film-add-review-form/film-add-review-form";
import {getFilmById} from "../../store/selectors";
import {connect} from "react-redux";
import filmProp from "../film-page/film.prop";

const FilmAddReviewPage = (props) => {
  const {film} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background} alt={film.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <PageHeaderLogo/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserAvatarBlock/>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>

      <FilmAddReviewForm/>
    </section>
  );
};

FilmAddReviewPage.propTypes = {
  film: filmProp
};

export {FilmAddReviewPage};

const mapStateToProps = ({DATA}, props) => ({
  film: getFilmById(DATA, props)
});

export default connect(mapStateToProps)(FilmAddReviewPage);

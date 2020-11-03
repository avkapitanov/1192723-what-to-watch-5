import React, {PureComponent} from "react";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import FilmAddReviewForm from "../film-add-review-form/film-add-review-form";
import {getFilm} from "../../store/selectors";
import {connect} from "react-redux";
import filmProp from "../film-page/film.prop";
import {fetchFilm} from "../../store/api-actions";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";

class FilmAddReviewPage extends PureComponent {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchFilm(id);
  }

  render() {
    const {film} = this.props;

    if (!film) {
      return null;
    }

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
  }

}

FilmAddReviewPage.propTypes = {
  film: filmProp,
  match: PropTypes.shape({
    params: PropTypes.object
  }),
  fetchFilm: PropTypes.func.isRequired
};

export {FilmAddReviewPage};

const mapStateToProps = ({DATA}) => ({
  film: getFilm(DATA)
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilm(id) {
    dispatch(fetchFilm(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FilmAddReviewPage));

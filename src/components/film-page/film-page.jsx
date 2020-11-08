import React, {PureComponent} from "react";
import PageFooter from "../page-footer/page-footer";
import FilmPageTabs from "../film-page-tabs/film-page-tabs";
import filmProp from "./film.prop";
import filmsProp from "./films.prop";
import PropTypes from "prop-types";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";
import {connect} from "react-redux";
import PageLogo from "../page-logo/page-logo";
import {Link} from "react-router-dom";
import {getFilm, getFilmId, getFilmReviews, getLoggedFlag, getSimilarFilms} from "../../store/selectors";
import FilmList from "../film-list/film-list";
import {fetchFilm, fetchFilmCommentsList} from "../../store/api-actions";
import reviewsProp from "../film-page-reviews-tab/reviews.prop";
import AddToMyListBtn from "../add-to-my-list-btn/add-to-my-list-btn";
import {FilmTab} from "../../const";
import {changeFilmRouteId} from "../../store/action";

class FilmPage extends PureComponent {
  constructor(props) {
    super(props);

    this.handlePlayBtnClick = (evt) => {
      evt.preventDefault();
      const {history} = this.props;
      history.push(`/player/` + evt.target.closest(`button`).dataset.id);
    };

    this.updateFilmInfo = () => {
      const id = this.props.match.params.id;
      this.props.fetchFilm(id);
      this.props.fetchFilmComments(id);
    };
  }

  componentDidMount() {
    this.updateFilmInfo();
  }

  componentDidUpdate() {
    const id = +this.props.match.params.id;
    if (this.props.filmId !== id) {
      this.props.changeRoute(+id);
      this.updateFilmInfo();
    }
  }

  render() {
    const {film, isLogged, reviews, similarFilms} = this.props;

    if (!film) {
      return null;
    }

    const addReviewBtn = (isLogged && <Link to={{
      pathname: `/films/${film.id}/review`
    }}
    className="btn movie-card__button">Add review</Link>);

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={film.background} alt={film.title}/>
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <PageLogo/>

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
                  <AddToMyListBtn filmId={film.id} isFavorite={film.isFavorite}/>
                  {addReviewBtn}
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={film.posterImage} alt={film.title + ` poster`} width="218" height="327"/>
              </div>

              <FilmPageTabs film={film} reviews={reviews} tabs={Object.values(FilmTab)}/>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmList films={similarFilms}/>
          </section>

          <PageFooter/>
        </div>
      </>
    );
  }
}

FilmPage.propTypes = {
  filmId: PropTypes.number,
  film: filmProp,
  similarFilms: filmsProp,
  reviews: reviewsProp,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object
  }),
  fetchFilm: PropTypes.func.isRequired,
  fetchFilmComments: PropTypes.func.isRequired,
  changeRoute: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired
};

export {FilmPage};

const mapStateToProps = (state) => ({
  filmId: getFilmId(state),
  film: getFilm(state),
  isLogged: getLoggedFlag(state),
  reviews: getFilmReviews(state),
  similarFilms: getSimilarFilms(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilmComments(id) {
    dispatch(fetchFilmCommentsList(id));
  },
  changeRoute(id) {
    dispatch(changeFilmRouteId(id));
  },
  fetchFilm(id) {
    dispatch(fetchFilm(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);

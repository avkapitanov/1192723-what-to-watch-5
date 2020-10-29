import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";
import PageHeaderLogo from "../page-header-logo/page-header-logo";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import filmProp from "../film-page/film.prop";

class PromoFilm extends PureComponent {
  constructor(props) {
    super(props);

    this.handlePlayBtnClick = (evt) => {
      evt.preventDefault();
      const {history} = this.props;
      history.push(`/player/` + evt.target.closest(`button`).dataset.id);
    };
  }

  render() {
    const {id, title, genre, year, posterImage, background} = this.props.promoFilm;

    return (
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={background} alt={title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <PageHeaderLogo/>

          <UserAvatarBlock/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={title} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" data-id={id} onClick={this.handlePlayBtnClick}>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

PromoFilm.propTypes = {
  promoFilm: filmProp,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
};

export {PromoFilm};

const mapStateToProps = (state) => ({
  promoFilm: state.promoFilm
});

export default connect(mapStateToProps)(withRouter(PromoFilm));

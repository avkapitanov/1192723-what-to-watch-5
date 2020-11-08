import React from "react";
import UserAvatarBlock from "../user-avatar-block/user-avatar-block";
import PageLogo from "../page-logo/page-logo";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import filmProp from "../film-page/film.prop";
import AddToMyListBtn from "../add-to-my-list-btn/add-to-my-list-btn";
import {getPromoFilm} from "../../store/selectors";

const PromoFilm = (props) => {
  const history = useHistory();

  const handlePlayBtnClick = (evt) => {
    evt.preventDefault();
    history.push(`/player/` + evt.currentTarget.dataset.id);
  };

  if (!props.promoFilm) {
    return null;
  }

  const {id, title, genre, year, posterImage, background, isFavorite} = props.promoFilm;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={background} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <PageLogo/>

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
              <button className="btn btn--play movie-card__button" type="button" data-id={id} onClick={handlePlayBtnClick}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <AddToMyListBtn filmId={id} isFavorite={isFavorite}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoFilm.propTypes = {
  promoFilm: filmProp,
};

const mapStateToProps = (state) => ({
  promoFilm: getPromoFilm(state)
});

export {PromoFilm};

export default connect(mapStateToProps)(PromoFilm);

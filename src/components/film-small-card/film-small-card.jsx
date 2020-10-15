import React from "react";
import filmProp from "../film-page/film.prop";
import PropTypes from "prop-types";

const FilmSmallCard = (props) => {
  const {onMouseEnter, onMouseLeave, film} = props;
  const {id, poster, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card" key={id}
      onMouseEnter={(evt) => {
        evt.preventDefault();
        onMouseEnter(film);
      }}
      onMouseLeave={(evt) => {
        evt.preventDefault();
        onMouseLeave();
      }}
    >
      <div className="small-movie-card__image">
        <img src={poster} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

FilmSmallCard.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  film: filmProp
};

export default FilmSmallCard;

import React from "react";
import filmProp from "../film-page/film.prop";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const FilmSmallCard = (props) => {
  const {onMouseEnter, onMouseLeave, onImageClick, film} = props;
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
      <div className="small-movie-card__image" onClick={(evt) => {
        evt.preventDefault();
        onImageClick(film);
      }}>
        <img src={poster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={{
          pathname: `/films/${id}`
        }}
        className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

FilmSmallCard.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
  film: filmProp
};

export default FilmSmallCard;

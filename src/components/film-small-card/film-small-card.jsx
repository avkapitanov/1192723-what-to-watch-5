import React from "react";
import filmProp from "../film-page/film.prop";
import {Link} from "react-router-dom";
import FilmSmallCardImage from "../film-small-card-image/film-small-card-image";

const FilmSmallCard = (props) => {
  const {film} = props;
  const {id, title} = film;

  return (
    <article className="small-movie-card catalog__movies-card" key={id}>
      <FilmSmallCardImage film={film}/>
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
  film: filmProp
};

export default FilmSmallCard;

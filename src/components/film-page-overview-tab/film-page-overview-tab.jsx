import React from "react";
import filmProp from "../film-page/film.prop";
import {formatToHumanFilmRating} from "../../utils";

const FilmPageOverviewTab = (props) => {
  const {film} = props;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{formatToHumanFilmRating(film.rating)}</span>
          <span className="movie-rating__count">{film.scores_count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and
          other</strong></p>
      </div>
    </>
  );
};

FilmPageOverviewTab.propTypes = {
  film: filmProp
};


export default FilmPageOverviewTab;

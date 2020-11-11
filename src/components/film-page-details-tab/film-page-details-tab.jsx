import React from "react";
import filmProp from "../film-page/film.prop";

import {formatFilmDuration} from "../../utils";

const FilmPageDetailsTab = (props) => {
  const {film} = props;

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{film.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {film.starring.map((star, ind, arr) => {
                if (ind === arr.length - 1) {
                  return <React.Fragment key={ind}>{star.trim()}</React.Fragment>;
                }
                return <React.Fragment key={ind}>{star.trim()}, <br/></React.Fragment>;
              })}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{formatFilmDuration(film.runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre.join(`, `)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </>
  );
};

FilmPageDetailsTab.propTypes = {
  film: filmProp
};

export default FilmPageDetailsTab;

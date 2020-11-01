import React from "react";
import filmProp from "../film-page/film.prop";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import SmallCardVideoPlayer from "../small-card-video-player/small-card-video-player";
import withPlayingStatus from "../../hocks/with-playing-status/with-playing-status";

const renderPlayer = (props) => {
  const {film, isPlaying} = props;
  const {poster, title, video} = film;

  let visualFilm;
  if (!isPlaying) {
    visualFilm = <img src={poster} alt={title} width="280" height="175" />;
  } else {
    visualFilm = <SmallCardVideoPlayer
      isPlaying={false}
      src={video}
      poster={poster}
    />;
  }

  return visualFilm;
};

const FilmSmallCard = (props) => {
  const {onMouseEnter, onMouseLeave, onImageClick, film} = props;
  const {id, title} = film;

  const visualFilm = renderPlayer(props);

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
      <div className="small-movie-card__image"
        onClick={(evt) => {
          evt.preventDefault();
          onImageClick(film);
        }}>
        {visualFilm}
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

export default withPlayingStatus(FilmSmallCard);

import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import withPlayingStatus from "../../hocs/with-playing-status/with-playing-status";
import SmallCardVideoPlayer from "../small-card-video-player/small-card-video-player";
import filmProp from "../film-page/film.prop";

const FilmSmallCardImage = (props) => {
  const history = useHistory();

  const {film, isPlaying, onMouseEnter, onMouseLeave} = props;
  const {id, title, poster, previewVideoLink} = film;

  const visualFilm = isPlaying ? <SmallCardVideoPlayer
    isPlaying={false}
    src={previewVideoLink}
    poster={poster}
  /> : <img src={poster} alt={title} width="280" height="175" />;

  const onImageClick = (card) => {
    history.push(`/films/${card.id}`);
  };

  return (
    <div className="small-movie-card__image"
      onClick={() => onImageClick(id)}
      onMouseEnter={(evt) => {
        evt.preventDefault();
        onMouseEnter(film);
      }}
      onMouseLeave={(evt) => {
        evt.preventDefault();
        onMouseLeave();
      }}>
      {visualFilm}
    </div>
  );
};

FilmSmallCardImage.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  film: filmProp,
  isPlaying: PropTypes.bool.isRequired
};

export {FilmSmallCardImage};

export default withPlayingStatus(FilmSmallCardImage);

import React, {useState, useEffect} from "react";
import filmProp from "../film-page/film.prop";
import {useHistory} from 'react-router-dom';

import {HOVER_TIME_BEFORE_PLAYING} from "../../const";
import FilmSmallCardVideoPlayer from "../film-small-card-video-player/film-small-card-video-player";

const FilmSmallCardImage = (props) => {
  const {film} = props;
  const {id, title, poster, previewVideoLink} = film;

  const history = useHistory();
  const [isPlaying, setPlaying] = useState(false);
  let timerId = null;

  useEffect(() => () => clearTimeout(timerId));

  const checkHoverTime = () => {
    timerId = setTimeout(() => {
      setPlaying(true);
    }, HOVER_TIME_BEFORE_PLAYING);
  };

  const resetHoverTime = () => {
    clearTimeout(timerId);
    setPlaying(false);
  };

  const handleImageClick = (filmId) => {
    history.push(`/films/${filmId}`);
  };

  const visualFilm = isPlaying ? <FilmSmallCardVideoPlayer
    src={previewVideoLink}
    poster={poster}
  /> : <img src={poster} alt={title} width="280" height="175" />;

  return (
    <div className="small-movie-card__image"
      onClick={() => handleImageClick(id)}
      onMouseEnter={checkHoverTime}
      onMouseLeave={resetHoverTime}>
      {visualFilm}
    </div>
  );
};

FilmSmallCardImage.propTypes = {
  film: filmProp
};

export default FilmSmallCardImage;

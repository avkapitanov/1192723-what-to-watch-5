import React, {useEffect, useState, useCallback} from "react";
import PropTypes from "prop-types";
import filmProp from "../film-page/film.prop";
import {connect} from "react-redux";
import {useHistory, useParams} from 'react-router-dom';

import {fetchFilm} from "../../store/api-actions";
import {getFilm} from "../../store/selectors";
import {useStateWithCallbackLazy} from "../../hooks/use-state-with-callback-lazy/use-state-with-callback-lazy";
import {TIMER_UPDATE_FREQUENCY} from "../../const";

const PlayerPage = (props) => {
  const {film} = props;
  const history = useHistory();
  const match = useParams();
  const [timerId, setTimerId] = useState(null);
  const [videoRef, setVideoRef] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setPlaying] = useStateWithCallbackLazy(false);
  const playerPosition = (currentTime / duration) * 100;
  const timeElapsed = new Date((duration - currentTime) * 1000).toISOString().substr(11, 8);

  useEffect(() => {
    if (videoRef !== null) {
      handlePlayBtnClick();
    }
  }, [videoRef]);

  useEffect(() => {
    updateFilmInfo();
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const onVideoRefChange = useCallback((video) => {
    if (video !== null) {
      video.oncanplaythrough = () => setDuration(video.duration);
      setVideoRef(video);
    }
  }, []);

  const handlePauseBtnClick = () => {
    videoRef.pause();
    clearInterval(timerId);
    setPlaying(false);
  };

  const handlePlayBtnClick = () => {
    videoRef.play();
    const timer = setInterval(() => {
      setCurrentTime((prevState) => prevState + 1);
    }, TIMER_UPDATE_FREQUENCY);
    setTimerId(timer);
    setPlaying(true);
  };

  const updateVideoPlayingInfo = () => {
    const isVideoPlaying = videoRef.currentTime > 0 && !videoRef.paused && !videoRef.ended && videoRef.readyState > 2;
    setCurrentTime(videoRef.currentTime);
    if (isVideoPlaying) {
      setPlaying(isVideoPlaying, () => {
        handlePlayBtnClick();
      });
    } else {
      setPlaying(isVideoPlaying);
    }
  };

  const handleExitBtnClick = () => {
    clearInterval(timerId);
    history.push(`/films/${film.id}`);
  };

  const handleFullscreenBtnClick = () => {
    const requestFullScreen = videoRef.requestFullscreen || videoRef.webkitRequestFullscreen || videoRef.msRequestFullscreen;

    requestFullScreen.call(videoRef);

    document.addEventListener(`fullscreenchange`, handlerFullscreenChange);
  };

  const handlerFullscreenChange = () => {
    if (!document.fullscreenElement) {
      updateVideoPlayingInfo();
    }
  };

  const updateFilmInfo = () => {
    const id = parseInt(match.id, 10);
    props.fetchFilm(id);
  };

  if (!film) {
    return null;
  }

  return (
    <div className="player">
      <video ref={onVideoRefChange} src={film.video} className="player__video" poster={film.background}></video>

      <button type="button" className="player__exit" onClick={handleExitBtnClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={currentTime} max={duration}></progress>
            <div className="player__toggler" style={{left: playerPosition + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeElapsed}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play"
            onClick={isPlaying ? handlePauseBtnClick : handlePlayBtnClick}
          >
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
            </svg>
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>
          <div className="player__name">{film.title}</div>

          <button type="button" className="player__full-screen" onClick={handleFullscreenBtnClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );

};

PlayerPage.propTypes = {
  film: filmProp,
  fetchFilm: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  film: getFilm(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilm(id) {
    dispatch(fetchFilm(id));
  }
});

export {PlayerPage};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerPage);

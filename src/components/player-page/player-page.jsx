import React, {useEffect} from "react";
import {useHistory, useParams} from 'react-router-dom';
import {getFilm} from "../../store/selectors";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import filmProp from "../film-page/film.prop";
import withPlayer from "../../hocs/with-player/with-player";
import {PLAYER_PAUSE_BTN_TYPE, PLAYER_PLAY_BTN_TYPE} from "../../const";
import {fetchFilm} from "../../store/api-actions";

const PlayerPage = (props) => {
  const history = useHistory();
  const match = useParams();

  useEffect(() => {
    updateFilmInfo();
  }, []);

  useEffect(() => {
    updateFilmInfo();
  }, [match.id]);

  const handleExitBtnClick = () => {
    history.goBack();
  };

  const handleFullscreenBtnClick = () => {
    const elem = props.videoRef.current;

    const requestFullScreen = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;

    requestFullScreen.call(elem);

    document.addEventListener(`fullscreenchange`, handlerFullscreenChange);
  };

  const handlerFullscreenChange = () => {
    if (!document.fullscreenElement) {
      props.updateVideoPlayingInfo();
    }
  };

  const updateFilmInfo = () => {
    const id = parseInt(match.id, 10);
    props.fetchFilm(id);
  };


  const {film, isPlaying, duration, currentTime, videoRef, handlePlayerPlayPauseBtnClick} = props;
  const playerPosition = (currentTime / duration) * 100;
  const timeElapsed = new Date((duration - currentTime) * 1000).toISOString().substr(11, 8);

  if (!film) {
    return null;
  }

  return (
    <div className="player">
      <video ref={videoRef} src={film.video} className="player__video" poster={film.background}></video>

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
            data-type={isPlaying ? PLAYER_PLAY_BTN_TYPE : PLAYER_PAUSE_BTN_TYPE}
            onClick={handlePlayerPlayPauseBtnClick}
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
  isPlaying: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  handlePlayerPlayPauseBtnClick: PropTypes.func.isRequired,
  updateVideoPlayingInfo: PropTypes.func.isRequired,
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]),
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(withPlayer(PlayerPage));

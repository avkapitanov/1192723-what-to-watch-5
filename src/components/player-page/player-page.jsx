import React, {PureComponent} from "react";
import {getFilm} from "../../store/selectors";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import filmProp from "../film-page/film.prop";
import withPlayer from "../../hocks/with-player/with-player";

class PlayerPage extends PureComponent {
  constructor(props) {
    super(props);

    this.handleExitBtnClick = () => {
      this.props.history.goBack();
    };

    this.handleFullscreenBtnClick = () => {
      const elem = this.props.videoRef.current;

      const requestFullScreen = elem.requestFullscreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;

      requestFullScreen.call(elem);

      document.addEventListener(`fullscreenchange`, this.handlerFullscreenChange);
    };

    this.handlerFullscreenChange = () => {
      if (!document.fullscreenElement) {
        this.props.updateVideoPlayingInfo();
      }
    };
  }

  render() {
    const {film, isPlaying, duration, currentTime, videoRef, handlePauseBtnClick, handlePlayBtnClick} = this.props;
    const playerPosition = (currentTime / duration) * 100;
    const timeElapsed = new Date((duration - currentTime) * 1000).toISOString().substr(11, 8);

    let button;
    if (isPlaying) {
      button = <button type="button" className="player__play" onClick={handlePauseBtnClick}>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </button>;
    } else {
      button = <button type="button" className="player__play" onClick={handlePlayBtnClick}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>;
    }

    return (
      <div className="player">
        <video ref={videoRef} src={film.video} className="player__video" poster={film.background}></video>

        <button type="button" className="player__exit" onClick={this.handleExitBtnClick}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={currentTime} max={duration}></progress>
              <div className="player__toggler" style={{left: playerPosition + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{timeElapsed}</div>
          </div>

          <div className="player__controls-row">
            {button}
            <div className="player__name">{film.title}</div>

            <button type="button" className="player__full-screen" onClick={this.handleFullscreenBtnClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

}

export {PlayerPage};

PlayerPage.propTypes = {
  film: filmProp,
  isPlaying: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  handlePauseBtnClick: PropTypes.func.isRequired,
  handlePlayBtnClick: PropTypes.func.isRequired,
  updateVideoPlayingInfo: PropTypes.func.isRequired,
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]),
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state)
});

export default connect(mapStateToProps)(withPlayer(PlayerPage));

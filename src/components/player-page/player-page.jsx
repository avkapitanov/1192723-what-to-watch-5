import React, {createRef, PureComponent} from "react";
import {getFilmById} from "../../store/selectors";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import filmProp from "../film-page/film.prop";

class PlayerPage extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false,
      currentTime: 0,
      duration: 0
    };

    this.handlePauseBtnClick = () => {
      this._videoRef.current.pause();
      clearTimeout(this._timerId);
      this.setState({
        isPlaying: false
      });
    };

    this.handlePlayBtnClick = () => {
      this._videoRef.current.play();

      this._timerId = setInterval(this.startTimer, 1000);

      this.setState({
        isPlaying: true
      });
    };

    this.handleExitBtnClick = () => {
      this.props.history.goBack();
    };

    this.handleFullscreenBtnClick = () => {
      const elem = this._videoRef.current;

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    };

    this.startTimer = () => {
      this.setState((state) => ({
        currentTime: state.currentTime + 1
      }));
    };
  }

  componentDidMount() {
    const video = this._videoRef.current;
    video.oncanplaythrough = () => this.setState({
      duration: video.duration
    });
  }

  componentWillUnmount() {
    clearInterval(this._timerId);
    this.setState({
      currentTime: this._videoRef.current.currentTime
    });
  }

  render() {
    const {film} = this.props;
    const {isPlaying, duration, currentTime} = this.state;
    const playerPosition = (currentTime / duration) * 100;
    const timeElapsed = new Date((duration - currentTime) * 1000).toISOString().substr(11, 8);

    let button;
    if (isPlaying) {
      button = <button type="button" className="player__play" onClick={this.handlePauseBtnClick}>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </button>;
    } else {
      button = <button type="button" className="player__play" onClick={this.handlePlayBtnClick}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>;
    }

    return (
      <div className="player">
        <video ref={this._videoRef} src={film.video} className="player__video" poster={film.background}></video>

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
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  film: getFilmById(state, props)
});

export default connect(mapStateToProps)(PlayerPage);

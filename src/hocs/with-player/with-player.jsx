import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {PLAYER_PAUSE_BTN_TYPE} from "../../const";

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: false,
        currentTime: 0,
        duration: 0
      };

      this.handlePlayerPlayPauseBtnClick = (evt) => {
        if (evt.target.closest(`button`).dataset.type === PLAYER_PAUSE_BTN_TYPE) {
          this.handlePlayBtnClick();
        } else {
          this.handlePauseBtnClick();
        }
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

      this.startTimer = () => {
        this.setState((state) => ({
          currentTime: state.currentTime + 1
        }));
      };

      this.updateVideoPlayingInfo = () => {
        const video = this._videoRef.current;
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
        this.setState({
          currentTime: video.currentTime,
          isPlaying
        },
        () => {
          if (isPlaying) {
            this.handlePlayBtnClick();
          }
        });

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
      const {isPlaying, currentTime, duration} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          handlePlayerPlayPauseBtnClick={this.handlePlayerPlayPauseBtnClick}
          updateVideoPlayingInfo={this.updateVideoPlayingInfo}
          videoRef={this._videoRef}
        >
        </Component>
      );
    }
  }

  WithPlayer.propTypes = {
    history: PropTypes.shape({
      goBack: PropTypes.func.isRequired
    }).isRequired
  };

  return WithPlayer;
};

export default withPlayer;

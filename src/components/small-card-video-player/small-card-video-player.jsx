import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class SmallCardVideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this._video = this.videoRef.current;

    this._video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });
  }

  componentWillUnmount() {
    this._video.oncanplaythrough = null;
    this._video.onplay = null;
    this._video.onpause = null;
    this._video = null;
  }

  render() {
    const {src, poster} = this.props;
    const {isLoading} = this.state;

    const loaderStyle = {
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      marginLeft: `-28px`,
      marginTop: `-60px`,
    };
    if (!isLoading) {
      loaderStyle.display = `none`;
    }

    return (
      <>
        <svg width="57" height="57" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#fff" style={loaderStyle}>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle cx="5" cy="50" r="5">
                <animate attributeName="cy"
                  begin="0s" dur="2.2s"
                  values="50;5;50;50"
                  calcMode="linear"
                  repeatCount="indefinite" />
                <animate attributeName="cx"
                  begin="0s" dur="2.2s"
                  values="5;27;49;5"
                  calcMode="linear"
                  repeatCount="indefinite" />
              </circle>
              <circle cx="27" cy="5" r="5">
                <animate attributeName="cy"
                  begin="0s" dur="2.2s"
                  from="5" to="5"
                  values="5;50;50;5"
                  calcMode="linear"
                  repeatCount="indefinite" />
                <animate attributeName="cx"
                  begin="0s" dur="2.2s"
                  from="27" to="27"
                  values="27;49;5;27"
                  calcMode="linear"
                  repeatCount="indefinite" />
              </circle>
              <circle cx="49" cy="50" r="5">
                <animate attributeName="cy"
                  begin="0s" dur="2.2s"
                  values="50;50;5;50"
                  calcMode="linear"
                  repeatCount="indefinite" />
                <animate attributeName="cx"
                  from="49" to="49"
                  begin="0s" dur="2.2s"
                  values="49;5;27;49"
                  calcMode="linear"
                  repeatCount="indefinite" />
              </circle>
            </g>
          </g>
        </svg>
        <video ref={this.videoRef} autoPlay muted src={src} poster={poster} style={{display: isLoading ? `none` : `block`}}></video>
      </>
    );
  }
}

SmallCardVideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

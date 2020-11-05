import React from "react";
import PropTypes from "prop-types";
import withLoadingVideo from "../../hocs/with-loading-video/with-loading-video";
import Loader from "../loader/loader";

const SmallCardVideoPlayer = (props) => {
  const {src, poster, isLoading, videoRef} = props;

  return (
      <>
        <Loader isLoading={isLoading}/>
        <video ref={videoRef} autoPlay muted src={src} poster={poster} style={{display: isLoading ? `none` : `block`}}></video>
      </>
  );
};

SmallCardVideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]),
};

export default withLoadingVideo(SmallCardVideoPlayer);

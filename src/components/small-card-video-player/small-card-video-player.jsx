import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import Loader from "../loader/loader";

const SmallCardVideoPlayer = (props) => {
  const videoRef = useRef();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let video = videoRef.current;
    video.oncanplaythrough = () => setLoading(false);

    return () => {
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video = null;
    };
  }, [isLoading]);

  const {src, poster} = props;

  return (
      <>
        <Loader isLoading={isLoading}/>
        <video ref={videoRef} autoPlay muted src={src} poster={poster} style={{display: isLoading ? `none` : `block`}}></video>
      </>
  );
};

SmallCardVideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default SmallCardVideoPlayer;

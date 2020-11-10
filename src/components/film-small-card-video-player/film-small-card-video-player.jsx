import React from "react";
import PropTypes from "prop-types";
import Loader from "../loader/loader";

const FilmSmallCardVideoPlayer = (props) => {
  const [isLoading, setLoading] = React.useState(true);

  const {src, poster} = props;
  const loader = (isLoading && <Loader />);

  return (
      <>
        {loader}
        <video onCanPlayThrough={() => setLoading(false)} autoPlay muted src={src} poster={poster} style={{display: isLoading ? `none` : `block`}}></video>
      </>
  );
};

FilmSmallCardVideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default FilmSmallCardVideoPlayer;

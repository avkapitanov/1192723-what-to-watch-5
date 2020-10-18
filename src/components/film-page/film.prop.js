import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired
});

import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  runTime: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired
});

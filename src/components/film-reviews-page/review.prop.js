import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date),
  text: PropTypes.string.isRequired
});

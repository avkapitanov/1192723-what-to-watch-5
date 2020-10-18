import React, {PureComponent} from "react";
import filmProp from "../film-page/film.prop";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import SmallCardVideoPlayer from "../small-card-video-player/small-card-video-player";
import {HOVER_TIME_BEFORE_PLAYING} from "../../const";

class FilmSmallCard extends PureComponent {
  constructor(props) {
    super(props);
    this._timerId = null;

    this.state = {
      isPlaying: false
    };

    this.checkHoverTime = this.checkHoverTime.bind(this);
    this.resetHoverTime = this.resetHoverTime.bind(this);
  }

  _renderPlayer() {
    const {film} = this.props;
    const {poster, title, video} = film;
    const {isPlaying} = this.state;

    let visualFilm;
    if (!isPlaying) {
      visualFilm = <img src={poster} alt={title} width="280" height="175" />;
    } else {
      visualFilm = <SmallCardVideoPlayer
        isPlaying={false}
        src={video}
        poster={poster}
      />;
    }

    return visualFilm;
  }

  checkHoverTime() {
    this._timerId = setTimeout(() => {
      this.setState({isPlaying: true});
    }, HOVER_TIME_BEFORE_PLAYING);
  }

  resetHoverTime() {
    clearTimeout(this._timerId);
    this.setState({isPlaying: false});
  }

  componentWillUnmount() {
    clearTimeout(this._timerId);
  }

  render() {
    const {onMouseEnter, onMouseLeave, onImageClick, film} = this.props;
    const {id, title} = film;

    const visualFilm = this._renderPlayer();

    return (
      <article className="small-movie-card catalog__movies-card" key={id}
        onMouseEnter={(evt) => {
          evt.preventDefault();
          onMouseEnter(film);
          this.checkHoverTime();
        }}
        onMouseLeave={(evt) => {
          evt.preventDefault();
          onMouseLeave();
          this.resetHoverTime();
        }}
      >
        <div className="small-movie-card__image"
          onClick={(evt) => {
            evt.preventDefault();
            onImageClick(film);
          }}>
          {visualFilm}
        </div>
        <h3 className="small-movie-card__title">
          <Link to={{
            pathname: `/films/${id}`
          }}
          className="small-movie-card__link">{title}</Link>
        </h3>
      </article>
    );
  }

}

FilmSmallCard.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
  film: filmProp
};

export default FilmSmallCard;

import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmSmallCard from "../film-small-card/film-small-card";
import filmsProp from "../film-page/films.prop";

class SimilarFilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.onMouseEnter = (card) => {
      this.setState(() => ({
        activeCard: card,
      }));
    };

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onImageClick = this.onImageClick.bind(this);
  }

  onImageClick(card) {
    this.props.history.push(`/films/${card.id}`);
  }

  onMouseLeave() {
    this.setState(() => ({
      activeCard: null,
    }));
  }

  render() {
    const {films} = this.props;

    return (
      <>
        <div className="catalog__movies-list">
          {films.map((film) => (
            <FilmSmallCard key={film.id} film={film}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              onImageClick={this.onImageClick}
            />
          ))}
        </div>
      </>
    );
  }
}

SimilarFilmList.propTypes = {
  films: filmsProp,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
};

export default SimilarFilmList;

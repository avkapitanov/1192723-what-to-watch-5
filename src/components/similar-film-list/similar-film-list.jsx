import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmSmallCard from "../film-small-card/film-small-card";
import filmsProp from "../film-page/films.prop";
import {withRouter} from "react-router-dom";
import withActiveItem from "../../hocks/with-active-item/with-active-item";

class SimilarFilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.onImageClick = this.onImageClick.bind(this);
  }

  onImageClick(card) {
    this.props.history.push(`/films/${card.id}`);
  }

  render() {
    const {films, onMouseEnter, onMouseLeave} = this.props;

    return (
      <>
        <div className="catalog__movies-list">
          {films.map((film) => (
            <FilmSmallCard key={film.id} film={film}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
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
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default withRouter(withActiveItem(SimilarFilmList));

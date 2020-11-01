import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmSmallCard from "../film-small-card/film-small-card";
import filmsProp from "../film-page/films.prop";
import {withRouter} from "react-router-dom";
import withActiveItem from "../../hocks/with-active-item/with-active-item";
import withShowMore from "../../hocks/with-show-more/with-show-more";

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.onImageClick = (card) => {
      this.props.history.push(`/films/${card.id}`);
    };
  }

  render() {
    const {films, onMouseEnter, onMouseLeave, perPage} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.slice(0, perPage).map((film) => (
          <FilmSmallCard key={film.id} film={film}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onImageClick={this.onImageClick}
          />
        ))}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: filmsProp,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  perPage: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

export default withRouter(withShowMore(withActiveItem(FilmList)));

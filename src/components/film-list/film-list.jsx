import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmSmallCard from "../film-small-card/film-small-card";
import filmsProp from "../film-page/films.prop";
import {withRouter} from "react-router-dom";
import withShowMore from "../../hocs/with-show-more/with-show-more";

class FilmList extends PureComponent {
  constructor(props) {
    super(props);

    this.onImageClick = (card) => {
      this.props.history.push(`/films/${card.id}`);
    };
  }

  render() {
    const {films, perPage} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.slice(0, perPage).map((film) => (
          <FilmSmallCard key={film.id} film={film}
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
  perPage: PropTypes.number.isRequired
};

export {FilmList};

export default withRouter(withShowMore(FilmList));

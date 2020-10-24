import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import FilmSmallCard from "../film-small-card/film-small-card";
import filmsProp from "../film-page/films.prop";
import {connect} from "react-redux";
import {filterFilmsByGenre} from "../../utils";
import ShowMoreFilmsBtn from "../show-more-films-btn/show-more-films-btn";

class FilmList extends PureComponent {
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
    const {films, renderedFilmsCount, selectedFilterGenre} = this.props;

    const filteredFilms = filterFilmsByGenre(films, selectedFilterGenre);

    return (
      <>
        <div className="catalog__movies-list">
          {filteredFilms.slice(0, renderedFilmsCount).map((film) => (
            <FilmSmallCard key={film.id} film={film}
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
              onImageClick={this.onImageClick}
            />
          ))}
        </div>
        <ShowMoreFilmsBtn filmsCount={filteredFilms.length}/>
      </>
    );
  }
}

FilmList.propTypes = {
  films: filmsProp,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  renderedFilmsCount: PropTypes.number.isRequired,
  selectedFilterGenre: PropTypes.string.isRequired
};

export {FilmList};

const mapStateToProps = (state) => ({
  films: state.films,
  renderedFilmsCount: state.renderedFilmsCount,
  selectedFilterGenre: state.selectedFilterGenre
});

export default connect(mapStateToProps)(FilmList);

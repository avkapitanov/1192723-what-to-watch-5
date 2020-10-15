import React, {PureComponent} from "react";
import FilmSmallCard from "../film-small-card/film-small-card";
import filmsProp from "../film-page/films.prop";

class FilmList extends PureComponent {
  constructor(props) {
    super(props);
    const {films} = props;
    this.films = films;

    this.state = {
      activeCard: null
    };
  }

  render() {
    return (
      <div className="catalog__movies-list">
        {this.films.map((film) => (
          <FilmSmallCard key={film.id} film={film}
            onMouseEnter={(card) => {
              this.setState(() => ({
                activeCard: card,
              }));
            }}
            onMouseLeave={() => {
              this.setState(() => ({
                activeCard: null,
              }));
            }}/>
        ))}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: filmsProp
};

export default FilmList;

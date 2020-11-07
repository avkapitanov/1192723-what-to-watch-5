import React from "react";
import PropTypes from "prop-types";
import FilmSmallCard from "../film-small-card/film-small-card";
import filmsProp from "../film-page/films.prop";
import withShowMore from "../../hocs/with-show-more/with-show-more";

const FilmList = (props) => {
  const {films, perPage} = props;

  return (
    <div className="catalog__movies-list">
      {films.slice(0, perPage).map((film) => (
        <FilmSmallCard key={film.id} film={film} />
      ))}
    </div>
  );
};

FilmList.propTypes = {
  films: filmsProp,
  perPage: PropTypes.number.isRequired
};

export {FilmList};

export default withShowMore(FilmList);

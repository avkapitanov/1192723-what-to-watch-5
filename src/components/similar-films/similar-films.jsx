import React from "react";
import filmsProp from "../film-page/films.prop";
import FilmList from "../film-list/film-list";
import PropTypes from "prop-types";

const SimilarFilms = (props) => {
  const {similarFilms, history} = props;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <FilmList films={similarFilms} history={history}/>
    </section>
  );
};

SimilarFilms.propTypes = {
  similarFilms: filmsProp,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default SimilarFilms;

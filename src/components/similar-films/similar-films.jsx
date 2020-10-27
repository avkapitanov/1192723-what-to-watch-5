import React from "react";
import filmsProp from "../film-page/films.prop";
import SimilarFilmList from "../similar-film-list/similar-film-list";
import withActiveItem from "../../hocks/with-active-item/with-active-item";

const SimilarFilms = (props) => {
  const {similarFilms} = props;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <SimilarFilmList films={similarFilms}/>
    </section>
  );
};

SimilarFilms.propTypes = {
  similarFilms: filmsProp
};

export default withActiveItem(SimilarFilms);

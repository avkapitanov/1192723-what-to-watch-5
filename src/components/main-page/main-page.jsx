import React, {useEffect} from "react";
import FilmList from "../film-list/film-list";
import PageFooter from "../page-footer/page-footer";
import FilmsFilter from "../films-filter/films-filter";
import PromoFilm from "../promo-film/promo-film";
import {filterFilmsByGenre, getSelectedGenre} from "../../store/selectors";
import {connect} from "react-redux";
import filmsProp from "../film-page/films.prop";
import PropTypes from "prop-types";
import {fetchPromoFilm} from "../../store/api-actions";

const MainPage = (props) => {
  const {films, selectedFilterGenre, fetchPromo} = props;

  useEffect(() => {
    fetchPromo();
  }, []);

  return (
    <>
      <PromoFilm/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsFilter/>

          <FilmList films={films} selectedGenre={selectedFilterGenre}/>
        </section>

        <PageFooter/>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  films: filterFilmsByGenre(state),
  selectedFilterGenre: getSelectedGenre(state)
});

MainPage.propTypes = {
  films: filmsProp,
  selectedFilterGenre: PropTypes.string.isRequired,
  fetchPromo: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  fetchPromo() {
    dispatch(fetchPromoFilm());
  }
});

export {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

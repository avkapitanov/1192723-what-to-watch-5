import React, {useEffect} from "react";
import PropTypes from "prop-types";
import filmsProp from "../film-page/films.prop";
import {connect} from "react-redux";

import {fetchPromoFilm} from "../../store/api-actions";
import {filterFilmsByGenre, getLoadingFlag, getSelectedGenre} from "../../store/selectors";

import AppLoader from "../app-loader/app-loader";
import FilmList from "../film-list/film-list";
import PageFooter from "../page-footer/page-footer";
import FilmsFilter from "../films-filter/films-filter";
import PromoFilm from "../promo-film/promo-film";

const MainPage = (props) => {
  const {films, selectedFilterGenre, fetchPromo, isLoading} = props;

  if (isLoading) {
    return <AppLoader />;
  }

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

MainPage.propTypes = {
  films: filmsProp,
  selectedFilterGenre: PropTypes.string.isRequired,
  fetchPromo: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  films: filterFilmsByGenre(state),
  selectedFilterGenre: getSelectedGenre(state),
  isLoading: getLoadingFlag(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchPromo() {
    dispatch(fetchPromoFilm());
  }
});

export {MainPage};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

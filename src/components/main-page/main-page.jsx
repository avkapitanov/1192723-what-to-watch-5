import React from "react";
import FilmList from "../film-list/film-list";
import PageFooter from "../page-footer/page-footer";
import FilmsFilter from "../films-filter/films-filter";
import PromoFilm from "../promo-film/promo-film";

const MainPage = () => {
  return (
    <>
      <PromoFilm/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsFilter/>

          <FilmList/>
        </section>

        <PageFooter/>
      </div>
    </>
  );
};

export default MainPage;

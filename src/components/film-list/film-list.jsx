import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import FilmSmallCard from "../film-small-card/film-small-card";
import filmsProp from "../film-page/films.prop";
import ShowMoreFilmsBtn from "../show-more-films-btn/show-more-films-btn";
import {FILMS_COUNT_PER_PAGE, INITIAL_FILMS_COUNT} from "../../const";

const FilmList = (props) => {
  const {films, initialFilmsCount, perPage, selectedGenre} = props;

  const [filmsPerPage, setPerPage] = useState(initialFilmsCount);

  useEffect(() => {
    setPerPage(initialFilmsCount);
  }, [selectedGenre]);

  const handleChangeFilmsCount = () => {
    setPerPage((prevState) => prevState + perPage);
  };

  const showMoreBtn = (filmsPerPage < films.length) ? <ShowMoreFilmsBtn onChangeFilmsCount={handleChangeFilmsCount}/> : null;

  return (
    <>
      <div className="catalog__movies-list">
        {films.slice(0, filmsPerPage).map((film) => (
          <FilmSmallCard key={film.id} film={film} />
        ))}
      </div>
      {showMoreBtn}
    </>
  );
};

FilmList.defaultProps = {
  perPage: FILMS_COUNT_PER_PAGE,
  initialFilmsCount: INITIAL_FILMS_COUNT,
  selectedGenre: ``
};

FilmList.propTypes = {
  films: filmsProp,
  perPage: PropTypes.number.isRequired,
  initialFilmsCount: PropTypes.number.isRequired,
  selectedGenre: PropTypes.string
};

export default FilmList;

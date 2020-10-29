import {DEFAULT_GENRE_FILTER_VALUE, FilmRating, MAX_GENRES_IN_FILTER} from "./const";

const MAX_DAY_GAP = 730;

export const getRandomInteger = (from = 0, to = 1) => {
  const lower = Math.ceil(Math.min(from, to));
  const upper = Math.floor(Math.max(from, to));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomFloat = (from = 1, to = 0) => {
  const lower = Math.min(from, to);
  const upper = Math.max(from, to);
  return Number.parseFloat((lower + Math.random() * (upper - lower)).toFixed(1));
};

export const getRandomElements = (data, count) => {
  const tmp = data.slice();
  let result = [];

  for (let i = 0; i < count; i++) {
    let elementInd = getRandomInteger(0, tmp.length - 1);
    result = result.concat(tmp.splice(elementInd, 1));
  }

  return result;
};

export const getRandomElement = (data) => {
  const randomIndex = getRandomInteger(0, data.length - 1);

  return data[randomIndex];
};

export const generateDate = () => {
  const daysGap = getRandomInteger(-MAX_DAY_GAP, 0);
  const currentDate = new Date();

  currentDate.setHours(getRandomInteger(0, 23), getRandomInteger(0, 59));

  currentDate.setDate(currentDate.getDate() + daysGap);

  return currentDate;
};

export const humanizeReviewDate = (date) => {
  const day = (`0` + date.getDate()).slice(-2);
  const month = date.toLocaleString(`en-US`, {month: `long`});
  return `${month} ${day}, ${date.getFullYear()}`;
};

export const formatReviewDate = (date) => {
  const day = (`0` + date.getDate()).slice(-2);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${day}`;
};

export const extend = (firstObj, secondObj) => {
  return Object.assign({}, firstObj, secondObj);
};

export const getUniqueGenresFromFilms = (films) => {
  const allGenresSet = new Set(films.reduce((acc, film) => acc.concat(film.genre), [DEFAULT_GENRE_FILTER_VALUE]));

  return Array.from(allGenresSet).slice(0, MAX_GENRES_IN_FILTER + 1);
};

export const filterFilmsByGenre = (films, genre) => {
  if (genre === DEFAULT_GENRE_FILTER_VALUE) {
    return films;
  }

  return films.filter((film) => film.genre.includes(genre));
};

export const adaptFilmsToClient = (films) => {
  return films.map(adaptFilmToClient);
};

const adaptFilmToClient = (film) => {
  const adaptedFilm = extend(
      film,
      {
        title: film.name,
        genre: [film.genre],
        year: film.released,
        poster: film.preview_image,
        background: film.background_image,
        video: film.video_link
      }
  );

  return adaptedFilm;
};

export const formatFilmDuration = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time - (hours * 60);

  return `${hours}h ${minutes}m`;
};

export const formatToHumanFilmRating = (rating) => {
  if (rating < FilmRating.BAD.VALUE) {
    return FilmRating.BAD.TEXT;
  } else if (rating < FilmRating.NORMAL.VALUE) {
    return FilmRating.NORMAL.TEXT;
  } else if (rating < FilmRating.GOOD.VALUE) {
    return FilmRating.GOOD.TEXT;
  } else if (rating < FilmRating.VERY_GOOD.VALUE) {
    return FilmRating.VERY_GOOD.TEXT;
  }

  return FilmRating.AWESOME.TEXT;
};

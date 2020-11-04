import {DEFAULT_GENRE_FILTER_VALUE, FilmRating, MAX_GENRES_IN_FILTER} from "./const";

export const humanizeReviewDate = (dateText) => {
  const date = new Date(dateText);
  const day = (`0` + date.getDate()).slice(-2);
  const month = date.toLocaleString(`en-US`, {month: `long`});
  return `${month} ${day}, ${date.getFullYear()}`;
};

export const formatReviewDate = (dateText) => {
  const date = new Date(dateText);
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

export const adaptFilmsToClient = (films) => {
  return films.map(adaptFilmToClient);
};

export const adaptFilmToClient = (film) => {
  const adaptedFilm = extend(
      {},
      {
        id: film.id,
        title: film.name,
        genre: [film.genre],
        year: film.released,
        poster: film.preview_image,
        posterImage: film.poster_image,
        background: film.background_image,
        backgroundColor: film.background_color,
        video: film.video_link,
        previewVideoLink: film.preview_video_link,
        description: film.description,
        rating: film.rating,
        scoresCount: film.scores_count,
        director: film.director,
        starring: film.starring,
        runTime: film.run_time,
        isFavorite: film.is_favorite
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

export const adaptUserToClient = (user) => {
  const adaptedUser = extend(
      user,
      {
        avatarUrl: user.avatar_url,
      }
  );

  delete adaptedUser.avatar_url;

  return adaptedUser;
};

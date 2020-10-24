import {extend, getUniqueGenresFromFilms} from "../utils";
import {ActionType} from "./action";
import {DEFAULT_GENRE_FILTER_VALUE} from "../const";
import films from "../mocks/films";

const initialState = {
  selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
  films,
  filterGenres: getUniqueGenresFromFilms(films)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        selectedFilterGenre: action.payload,
      });
  }

  return state;
};


export {reducer};

import {process} from "./process";
import {DEFAULT_GENRE_FILTER_VALUE} from "../../../const";
import {ActionType} from "../../action";
import {filterGenres} from "../../../mocks/filters";

it(`Process reducer without additional parameters should return initial state`, () => {
  expect(process(void 0, {})).toEqual({
    selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
    isLoading: false
  });
});

it(`Process reducer should change selected genre`, () => {
  expect(process({
    selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
    isLoading: false
  }, {
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: filterGenres[1],
  })).toEqual({
    selectedFilterGenre: filterGenres[1],
    isLoading: false
  });

  expect(process({
    selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
    isLoading: false
  }, {
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: filterGenres[2],
  })).toEqual({
    selectedFilterGenre: filterGenres[2],
    isLoading: false
  });
});

it(`Process reducer should change isLoading flag`, () => {
  expect(process({
    selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
    isLoading: false
  }, {
    type: ActionType.SET_LOADING_STATUS,
    payload: true,
  })).toEqual({
    selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
    isLoading: true
  });

  expect(process({
    selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
    isLoading: true
  }, {
    type: ActionType.SET_LOADING_STATUS,
    payload: false,
  })).toEqual({
    selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
    isLoading: false
  });
});

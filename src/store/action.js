import {FILMS_COUNT_PER_STEP} from "../const";

export const ActionType = {
  CHANGE_FILTER_GENRE: `CHANGE_FILTER_GENRE`,
  INC_RENDERED_FILMS_COUNT: `INC_RENDERED_FILMS_COUNT`,
  RESET_RENDERED_FILMS_COUNT: `RESET_RENDERED_FILMS_COUNT`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`
};

export const ActionCreator = {
  changeFilterGenre: (genre) => ({
    type: ActionType.CHANGE_FILTER_GENRE,
    payload: genre,
  }),
  incRenderedFilmsCount: () => ({
    type: ActionType.INC_RENDERED_FILMS_COUNT,
    payload: FILMS_COUNT_PER_STEP
  }),
  resetRenderedFilmsCount: () => ({
    type: ActionType.RESET_RENDERED_FILMS_COUNT,
  })
};

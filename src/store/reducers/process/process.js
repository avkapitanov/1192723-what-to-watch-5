import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {DEFAULT_GENRE_FILTER_VALUE, INITIAL_FILMS_COUNT} from "../../../const";

const initialState = {
  selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
  renderedFilmsCount: INITIAL_FILMS_COUNT,
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        selectedFilterGenre: action.payload,
      });
    case ActionType.INC_RENDERED_FILMS_COUNT:
      return extend(state, {
        renderedFilmsCount: state.renderedFilmsCount + action.payload,
      });
    case ActionType.RESET_RENDERED_FILMS_COUNT:
      return extend(state, {
        renderedFilmsCount: INITIAL_FILMS_COUNT,
      });
  }

  return state;
};


export {process};

import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {DEFAULT_GENRE_FILTER_VALUE} from "../../../const";

const initialState = {
  selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE,
  isLoading: false
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        selectedFilterGenre: action.payload,
      });
    case ActionType.SET_LOADING_STATUS:
      return extend(state, {
        isLoading: action.payload
      });
  }

  return state;
};


export {process};

import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {DEFAULT_GENRE_FILTER_VALUE} from "../../../const";

const initialState = {
  selectedFilterGenre: DEFAULT_GENRE_FILTER_VALUE
};

const process = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_GENRE:
      return extend(state, {
        selectedFilterGenre: action.payload,
      });
  }

  return state;
};


export {process};

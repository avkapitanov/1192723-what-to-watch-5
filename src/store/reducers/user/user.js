import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";
import {adaptUserToClient} from "../../../utils";
import {extend} from "../../../utils";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      const adaptedUser = adaptUserToClient(action.payload.data);
      return extend(state, {
        authorizationStatus: action.payload.status,
        authInfo: adaptedUser
      });
  }

  return state;
};

export {user};

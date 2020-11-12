import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../action";
import {checkAuth, login} from "../../api-actions";
import {APIRoute, AppRoute} from "../../../const";
import {AuthorizationStatus} from "../../../const";
import {authInfo} from "../../../mocks/users";
import {describe, expect, it} from '@jest/globals';

const api = createAPI(() => {});

it(`User reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: {}
  });
});

it(`User reducer should update authorizationStatus to "auth"`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: {}
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {
      status: AuthorizationStatus.AUTH,
      data: {}
    }
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo: {}
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, authInfo);

    return authLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {
            status: AuthorizationStatus.AUTH,
            data: authInfo
          },
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: `test@test.ru`, password: `123456`};
    const authLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, authInfo);

    return authLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: {
            status: AuthorizationStatus.AUTH,
            data: authInfo
          }
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

});

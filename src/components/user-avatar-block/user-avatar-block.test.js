import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {AuthorizationStatus} from "../../const";
import {authInfo} from "../../mocks/users";
import UserAvatarBlock from "./user-avatar-block";

const mockStore = configureStore([]);

describe(`UserAvatarBlock component render correctly`, () => {
  it(`With unauthorized user`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {}
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <UserAvatarBlock />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With authorized user`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        authInfo
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <UserAvatarBlock />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

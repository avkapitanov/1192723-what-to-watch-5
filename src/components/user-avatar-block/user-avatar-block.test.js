import React from "react";
import renderer from "react-test-renderer";
import UserAvatarBlock from "./user-avatar-block";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "../../const";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import {Provider} from "react-redux";

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
        authInfo: {
          id: 1,
          email: `Oliver.conner@gmail.com`,
          name: `Oliver.conner`,
          avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`
        }
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

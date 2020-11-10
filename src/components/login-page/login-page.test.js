import React from "react";
import renderer from "react-test-renderer";
import LoginPage from "./login-page";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {AuthorizationStatus} from "../../const";

const mockStore = configureStore([]);

describe(`LoginPage component render correct`, () => {
  it(`No auth`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <LoginPage />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Auth`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <LoginPage />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});



import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {AppRoute, AuthorizationStatus} from "../../const";
import PrivateRoute from "./private-route";

const mockStore = configureStore([]);
const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
  }
});

it(`PrivateRoute component render correctly`, () => {
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <PrivateRoute
            exact={true}
            path={AppRoute.MY_LIST}
            render={() => {}}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

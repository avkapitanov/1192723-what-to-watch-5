import React from "react";
import renderer from "react-test-renderer";
import PrivateRoute from "./private-route";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {AuthorizationStatus} from "../../const";

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
            path={`/myfilms`}
            render={() => {}}
          />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

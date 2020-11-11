import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

import {AuthorizationStatus} from "../../const";
import AddToMyListBtn from "./add-to-my-list-btn";

const mockStore = configureStore([]);

describe(`AddToMyListBtn component render correctly`, () => {
  it(`With unauthorized user`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <AddToMyListBtn
              filmId={1}
              isFavorite={false}
              onAddToMyListBtnClick={() => {}}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With authorized user`, () => {
    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
      }
    });

    const tree = renderer.create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <AddToMyListBtn
              filmId={1}
              isFavorite={false}
              handleMyListBtnClick={() => {}}
            />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

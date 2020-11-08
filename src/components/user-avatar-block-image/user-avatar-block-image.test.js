import React from "react";
import renderer from "react-test-renderer";
import UserAvatarBlockImage from "./user-avatar-block-image";
import {Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";

const avatarUrl = `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`;

it(`UserAvatarBlockImage component render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter history={browserHistory}>
        <UserAvatarBlockImage
          avatarUrl={avatarUrl}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


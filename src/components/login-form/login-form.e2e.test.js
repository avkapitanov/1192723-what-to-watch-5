import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoginForm, FormFieldName} from './login-form';

const realUseState = React.useState;
const login = `test@test.ru`;
const password = `123456`;
jest
  .spyOn(React, `useState`)
  .mockImplementationOnce(() => realUseState(false))
  .mockImplementationOnce(() => realUseState(false))
  .mockImplementationOnce(() => realUseState({
    [FormFieldName.LOGIN]: login,
    [FormFieldName.PASSWORD]: password
  }));


configure({adapter: new Adapter()});

it(`Should LoginForm was submitted`, () => {
  const onSubmit = jest.fn();

  const wrapper = shallow(
      <LoginForm
        onSubmit={onSubmit}
      />
  );

  const formElement = wrapper.find(`form`);

  formElement.simulate(`submit`, {
    preventDefault() {}
  });
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({
    login,
    password,
  });
});

import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {login} from "../../store/api-actions";

import {extend} from "../../utils";
import {EMAIL_REGEXP} from "../../const";

export const FormFieldName = {
  LOGIN: `user-email`,
  PASSWORD: `user-password`
};

const LoginForm = ({onSubmit}) => {
  const [isEmailError, setEmailError] = React.useState(false);
  const [isPasswordError, setPasswordError] = React.useState(false);
  const [formValues, setFormValues] = React.useState({});

  const checkEmail = (value) => !EMAIL_REGEXP.test(value);
  const checkPassword = (value) => value.length === 0;

  const handleFormValuesChange = (evt) => {
    switch (evt.target.name) {
      case FormFieldName.LOGIN:
        setEmailError(checkEmail(evt.target.value));
        break;
      case FormFieldName.PASSWORD:
        setPasswordError(checkPassword(evt.target.value));
        break;
    }
    setFormValues(extend(formValues, {
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (Object.values(formValues).filter((value) => value).length === 0) {
      setEmailError(true);
      setPasswordError(true);
      return;
    }

    if (isEmailError || isPasswordError) {
      return;
    }

    onSubmit({
      login: formValues[FormFieldName.LOGIN],
      password: formValues[FormFieldName.PASSWORD],
    });
  };

  const errorEmailText = (isEmailError && <div className="sign-in__message">
    <p>Please enter a valid email address</p>
  </div>);

  const passwordErrorText = (isPasswordError && <div className="sign-in__message">
    <p>Please enter a password</p>
  </div>);

  return (
    <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
      {errorEmailText}
      {passwordErrorText}
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input onChange={handleFormValuesChange} className="sign-in__input" type="email" placeholder="Email address" name={FormFieldName.LOGIN} id="user-email"/>
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input onChange={handleFormValuesChange} className="sign-in__input" type="password" placeholder="Password" name={FormFieldName.PASSWORD} id="user-password"/>
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {LoginForm};

export default connect(null, mapDispatchToProps)(LoginForm);

import React, {createRef} from "react";
import {login} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {EMAIL_REGEXP} from "../../const";

const LoginForm = (props) => {
  const [isEmailError, setEmailError] = React.useState(false);
  const [isPasswordError, setPasswordError] = React.useState(false);

  const loginRef = createRef();
  const passwordRef = createRef();

  const checkEmail = () => EMAIL_REGEXP.test(loginRef.current.value);

  const checkPassword = () => passwordRef.current.value.length > 0;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!checkEmail()) {
      setEmailError(true);
      return;
    }

    if (!checkPassword()) {
      setPasswordError(true);
      return;
    }

    const {onSubmit} = props;

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
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
          <input ref={loginRef} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"/>
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input ref={passwordRef} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"/>
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

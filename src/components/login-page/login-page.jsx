import React from "react";
import PageFooter from "../page-footer/page-footer";
import PageLogo from "../page-logo/page-logo";
import LoginForm from "../login-form/login-form";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getLoggedFlag} from "../../store/selectors";
import {Redirect} from "react-router-dom";

const LoginPage = (props) => {
  const {isLogged} = props;

  if (isLogged) {
    return <Redirect to={`/`} />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <PageLogo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <LoginForm />
      </div>

      <PageFooter/>
    </div>
  );
};

LoginPage.propTypes = {
  isLogged: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isLogged: getLoggedFlag(state)
});

export {LoginPage};

export default connect(mapStateToProps)(LoginPage);

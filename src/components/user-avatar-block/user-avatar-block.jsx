import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {getAuthInfo, getAuthorizationStatus} from "../../store/selectors";

import {AppRoute, AuthorizationStatus} from "../../const";
import UserAvatarBlockImage from "../user-avatar-block-image/user-avatar-block-image";

const UserAvatarBlock = ({authorizationStatus, authInfo}) => {
  const isLogged = authorizationStatus === AuthorizationStatus.AUTH;

  let userBlockContent;
  if (isLogged) {
    const {avatarUrl} = authInfo;
    userBlockContent = <UserAvatarBlockImage avatarUrl={avatarUrl}/>;
  } else {
    userBlockContent = <Link className="user-block__link" to={{pathname: AppRoute.LOGIN}}>Sign in</Link>;
  }

  return (
    <div className="user-block">
      {userBlockContent}
    </div>
  );
};

UserAvatarBlock.propTypes = {
  authInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state),
  authorizationStatus: getAuthorizationStatus(state)
});

export {UserAvatarBlock};

export default connect(mapStateToProps)(UserAvatarBlock);

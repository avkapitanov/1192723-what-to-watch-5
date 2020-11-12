import React from "react";
import PropTypes from "prop-types";
import {useHistory, useLocation} from "react-router-dom";

import {AppRoute} from "../../const";

const UserAvatarBlockImage = ({avatarUrl}) => {
  const history = useHistory();
  const location = useLocation();

  const handleAvatarClick = () => {
    if (location.pathname !== AppRoute.MY_LIST) {
      history.push(AppRoute.MY_LIST);
    }
  };

  return (
    <div className="user-block__avatar">
      <img src={avatarUrl} alt="User avatar" width="63" height="63" onClick={handleAvatarClick} />
    </div>
  );
};

UserAvatarBlockImage.propTypes = {
  avatarUrl: PropTypes.string.isRequired
};

export default UserAvatarBlockImage;

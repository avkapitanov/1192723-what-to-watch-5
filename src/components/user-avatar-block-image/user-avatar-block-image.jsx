import React from "react";
import PropTypes from "prop-types";
import {useHistory, useLocation} from "react-router-dom";

const UserAvatarBlockImage = (props) => {
  const history = useHistory();
  const location = useLocation();

  const {avatarUrl} = props;

  const handleAvatarClick = () => {
    if (location.pathname !== `/mylist`) {
      history.push(`/mylist`);
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

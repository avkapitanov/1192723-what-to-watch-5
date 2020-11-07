import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

class UserAvatarBlockImage extends PureComponent {
  constructor(props) {
    super(props);

    this.handleAvatarClick = this.handleAvatarClick.bind(this);
  }

  handleAvatarClick() {
    if (this.props.location.pathname !== `/mylist`) {
      this.props.history.push(`/mylist`);
    }
  }

  render() {
    const {avatarUrl} = this.props;

    return (
      <div className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63" onClick={this.handleAvatarClick} />
      </div>
    );
  }
}

UserAvatarBlockImage.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired
};

export {UserAvatarBlockImage};

export default withRouter(UserAvatarBlockImage);

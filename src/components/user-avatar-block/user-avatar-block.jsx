import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../const";
import {getAuthInfo, getAuthorizationStatus} from "../../store/selectors";

class UserAvatarBlock extends PureComponent {
  constructor(props) {
    super(props);

    this.handleAvatarClick = () => {
      if (this.props.location.pathname !== `/mylist`) {
        this.props.history.push(`/mylist`);
      }
    };
  }


  render() {
    const {avatarUrl} = this.props.authInfo;
    const {authorizationStatus} = this.props;
    const isLogged = authorizationStatus === AuthorizationStatus.AUTH;

    let userBlockContent;
    if (isLogged) {
      userBlockContent = <div className="user-block__avatar">
        <img src={avatarUrl} alt="User avatar" width="63" height="63" onClick={this.handleAvatarClick} />
      </div>;
    } else {
      userBlockContent = <Link className="user-block__link" to={{pathname: `/login`}}>Sign in</Link>;
    }

    return (
      <div className="user-block">
        {userBlockContent}
      </div>
    );
  }
}

UserAvatarBlock.propTypes = {
  authInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export {UserAvatarBlock};

const mapStateToProps = (state) => ({
  authInfo: getAuthInfo(state),
  authorizationStatus: getAuthorizationStatus(state)
});

export default connect(mapStateToProps)(withRouter(UserAvatarBlock));

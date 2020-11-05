import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const PageLogo = ({isFooter}) => {
  const additionalClass = isFooter ? ` logo__link--light` : ``;

  return (
    <div className="logo">
      <Link to={{
        pathname: `/`
      }}
      className={`logo__link${additionalClass}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

PageLogo.defaultProps = {
  isFooter: false
};

PageLogo.propTypes = {
  isFooter: PropTypes.bool
};

export default PageLogo;

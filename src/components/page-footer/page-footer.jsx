import React from "react";

import PageLogo from "../page-logo/page-logo";

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <PageLogo isFooter={true}/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default PageFooter;

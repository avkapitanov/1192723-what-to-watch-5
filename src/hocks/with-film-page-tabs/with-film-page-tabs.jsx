import React, {PureComponent} from 'react';
import {DEFAULT_ACTIVE_TAB} from "../../const";

const withFilmPageTabs = (Component) => {
  return class WithFilmPageTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: DEFAULT_ACTIVE_TAB
      };

      this._handleActiveTabChange = this._handleActiveTabChange.bind(this);
    }

    _handleActiveTabChange(evt) {
      evt.preventDefault();
      const selectedTab = evt.target.dataset.tab;
      this.setState(
          {activeTab: selectedTab}
      );
    }

    render() {
      const {activeTab} = this.state;

      return <Component
        {...this.props}
        activeTab={activeTab}
        onActiveTabChange={this._handleActiveTabChange}
      />;
    }
  };
};

export default withFilmPageTabs;

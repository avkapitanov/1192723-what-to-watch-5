import React, {PureComponent} from "react";
import {HOVER_TIME_BEFORE_PLAYING} from "../../const";

const withPlayingStatus = (Component) => {
  return class WithPlayingStatus extends PureComponent {
    constructor(props) {
      super(props);
      this._timerId = null;

      this.state = {
        isPlaying: false
      };

      this.checkHoverTime = () => {
        this._timerId = setTimeout(() => {
          this.setState({isPlaying: true});
        }, HOVER_TIME_BEFORE_PLAYING);
      };

      this.resetHoverTime = () => {
        clearTimeout(this._timerId);
        this.setState({isPlaying: false});
      };
    }

    componentWillUnmount() {
      clearTimeout(this._timerId);
    }

    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        isPlaying={isPlaying}
        onMouseEnter={this.checkHoverTime}
        onMouseLeave={this.resetHoverTime}
      />;
    }
  };
};

export default withPlayingStatus;

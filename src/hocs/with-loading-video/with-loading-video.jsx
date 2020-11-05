import React, {PureComponent} from "react";

const withLoadingVideo = (Component) => {
  return class WithLoadingVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.state = {
        isLoading: true
      };
    }

    componentDidMount() {
      this._video = this.videoRef.current;

      this._video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });
    }

    componentWillUnmount() {
      this._video.oncanplaythrough = null;
      this._video.onplay = null;
      this._video.onpause = null;
      this._video = null;
    }

    render() {
      const {isLoading} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
          videoRef={this.videoRef}>
        </Component>
      );
    }
  };
};

export default withLoadingVideo;

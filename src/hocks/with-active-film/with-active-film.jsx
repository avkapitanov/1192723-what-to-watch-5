import React, {PureComponent} from "react";

const withActiveFilm = (Component) => {
  return class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: null
      };

      this.onMouseEnter = (card) => {
        this.setState(() => ({
          activeCard: card,
        }));
      };

      this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseLeave() {
      this.setState(() => ({
        activeCard: null,
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseLeave={this.onMouseLeave}
          onMouseEnter={this.onMouseEnter}>
        </Component>
      );
    }
  };
};

export default withActiveFilm;

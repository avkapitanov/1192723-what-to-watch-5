import React, {PureComponent} from "react";
import {DEFAULT_RATING_FORM_VALUE} from "../../const";

const withFilmAddReviewForm = (Component) => {
  return class WithFilmAddReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        "rating": DEFAULT_RATING_FORM_VALUE,
        "review-text": ``,
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return <Component
        {...this.props}
        onFormChange={this.handleFieldChange}
      />;
    }
  };
};

export default withFilmAddReviewForm;

import React, {PureComponent} from "react";
import {
  DEFAULT_RATING_FORM_VALUE,
  HOVER_TIME_BEFORE_HIDE_ERROR,
  MAX_REVIEW_TEXT,
  MIN_REVIEW_TEXT
} from "../../const";

const withFilmAddReviewForm = (Component) => {
  return class WithFilmAddReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_RATING_FORM_VALUE,
        reviewText: ``,
        hasTextError: true,
        isDisabled: false,
        hasError: false
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.setSubmitProcess = this.setSubmitProcess.bind(this);
      this.onError = this.onError.bind(this);
    }

    onError() {
      this.setState({
        isDisabled: false,
        hasError: true
      }, () => {
        setTimeout(() => {
          this.setState({hasError: false});
        }, HOVER_TIME_BEFORE_HIDE_ERROR);
      });
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      if (name === `reviewText`) {
        this.setState({
          hasTextError: value.length < MIN_REVIEW_TEXT || value.length > MAX_REVIEW_TEXT
        });
      }
      this.setState({[name]: value});
    }

    setSubmitProcess() {
      this.setState({isDisabled: true});
    }

    render() {
      return <Component
        {...this.props}
        {...this.state}
        onFormChange={this.handleFieldChange}
        setSubmitProcess={this.setSubmitProcess}
        onError={this.onError}
      />;
    }
  };
};

export default withFilmAddReviewForm;

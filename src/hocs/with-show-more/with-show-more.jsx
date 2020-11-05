import React, {PureComponent} from "react";
import {FILMS_COUNT_PER_PAGE, INITIAL_FILMS_COUNT} from "../../const";
import ShowMoreFilmsBtn from "../../components/show-more-films-btn/show-more-films-btn";
import filmsProp from "../../components/film-page/films.prop";
import PropTypes from "prop-types";

const withShowMore = (Component) => {
  class WithShowMore extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        perPage: INITIAL_FILMS_COUNT
      };

      this.onChangeFilmsCount = () => {
        this.setState((prevState) => ({
          perPage: prevState.perPage + FILMS_COUNT_PER_PAGE
        }));
      };
    }

    componentDidUpdate(prevProps) {
      if (prevProps.selectedGenre !== this.props.selectedGenre) {
        this.setState({
          perPage: INITIAL_FILMS_COUNT
        });
      }
    }

    render() {
      const {films} = this.props;
      const {perPage} = this.state;

      const showMoreBtn = (perPage < films.length) ? <ShowMoreFilmsBtn onChangeFilmsCount={this.onChangeFilmsCount}/> : null;
      return (
        <>
          <Component
            {...this.props}
            perPage={perPage}>
          </Component>
          {showMoreBtn}
        </>
      );
    }
  }

  WithShowMore.propTypes = {
    films: filmsProp,
    selectedGenre: PropTypes.string
  };

  return WithShowMore;
};

export default withShowMore;

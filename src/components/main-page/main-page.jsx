import React, {PureComponent} from "react";
import FilmList from "../film-list/film-list";
import PageFooter from "../page-footer/page-footer";
import PropTypes from "prop-types";
import FilmsFilter from "../films-filter/films-filter";

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {history} = this.props;

    return (
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsFilter/>

          <FilmList history={history}/>
        </section>

        <PageFooter/>
      </div>
    );
  }
}

MainPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default MainPage;

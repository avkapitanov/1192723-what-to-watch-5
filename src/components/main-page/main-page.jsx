import React, {PureComponent} from "react";
import FilmList from "../film-list/film-list";
import filmsProp from "../film-page/films.prop";
import PageFooter from "../page-footer/page-footer";
import PropTypes from "prop-types";
import FilmsFilter from "../films-filter/films-filter";

class MainPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, history} = this.props;

    return (
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsFilter/>

          <FilmList films={films} history={history}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <PageFooter/>
      </div>
    );
  }
}

MainPage.propTypes = {
  films: filmsProp,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default MainPage;

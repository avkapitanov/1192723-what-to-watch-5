import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";
import PromoFilm from "../promo-film/promo-film";


const App = (props) => {
  const {promoFilm} = props;

  return (
    <React.Fragment>
      <PromoFilm title={promoFilm.title} genre={promoFilm.genre} year={promoFilm.year}/>
      <MainPage/>
    </React.Fragment>
  );
};

App.propTypes = {
  promoFilm: PropTypes.object.isRequired,
};

export default App;

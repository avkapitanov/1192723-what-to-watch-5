import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import promoFilm from "./mocks/promo-film";
import reviews from "./mocks/reviews";

ReactDOM.render(
    <App
      promoFilm={promoFilm}
      films={films}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);

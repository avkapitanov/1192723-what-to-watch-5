import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const PromoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      promoFilm={PromoFilm}
    />,
    document.querySelector(`#root`)
);

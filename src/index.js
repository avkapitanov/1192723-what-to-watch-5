import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
import promoFilm from "./mocks/promo-film";
import reviews from "./mocks/reviews";
import {reducer} from "./store/reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoFilm={promoFilm}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);

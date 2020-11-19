import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store/store";
import App from "./App";
import { GlobalStyle } from "./globalStyle";

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </>,
  document.getElementById("root")
);

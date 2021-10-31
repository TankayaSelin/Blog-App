import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryParamProvider } from 'use-query-params';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <App />
        </QueryParamProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

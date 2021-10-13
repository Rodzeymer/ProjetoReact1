import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import App from "./pages/App";
import Repositorio from "./pages/Repositorio";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/pages/" component={App} />
      </Switch>
      <Switch>
        <Route path="/pages/repositorio" component={Repositorio} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

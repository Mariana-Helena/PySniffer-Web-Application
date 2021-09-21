import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

/**
 * Defines all routes from application.
 */
export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

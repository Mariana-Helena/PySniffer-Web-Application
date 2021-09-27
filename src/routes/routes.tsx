import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import HowToUse from "../pages/HowToUse";
/*
 * Defines all routes from application.
 */
export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/statistics" exact component={Statistics} />
        <Route path="/how-to-use" exact component={HowToUse} />
      </Switch>
    </BrowserRouter>
  );
}

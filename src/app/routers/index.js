import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeComponent from "../components/home.js";
import AboutComponent from "../components/about.js";
import ContactComponent from "../components/contact.js";

const Routers = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ HomeComponent } />
      <Route exact path="/home" component={ HomeComponent } />
      <Route path="/about" component={ AboutComponent } />
      <Route path="/contact" component={ ContactComponent } />
    </Switch>
  </BrowserRouter>
);

export default Routers;
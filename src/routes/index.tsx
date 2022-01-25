import React from "react";
import { Switch, Route } from "react-router-dom";
import { DragonContextProvider } from "../contexts/DragonContext";
import { SignIn } from "../pages/SignIn";
import { Dashboard } from "../pages/Dashboard";
const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={SignIn} />
    <DragonContextProvider>
      <Route path="/" component={Dashboard} />
    </DragonContextProvider>
  </Switch>
);

export default Routes;

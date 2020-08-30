import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ResetPassword from "./ResetPassword";
import EnterCode from "./EnterCode";
import TopRating from "./TopRating";

export default function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Switch>
          <Route path="/" exact="true">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/resetpassword">
            <ResetPassword />
          </Route>
          <Route path="/entercode">
            <EnterCode />
          </Route>
          <Route path="/toprating">
            <TopRating />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

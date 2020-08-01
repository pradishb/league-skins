import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import EnterCode from "./components/EnterCode";
import TopRating from "./components/TopRating";

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}

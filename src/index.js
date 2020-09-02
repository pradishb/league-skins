import React from "react";
import ReactDOM from "react-dom";
import "./components/css/main.css";
import App from "./components/App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faStar,
  faStarHalf,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faStar, faStarHalf, faSearch);

ReactDOM.render(<App />, document.getElementById("root"));

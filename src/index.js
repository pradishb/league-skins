import React from "react";
import ReactDOM from "react-dom";
import "./css/sdf.css";
import "./css/index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faStar, faStarHalf);

ReactDOM.render(<App />, document.getElementById("root"));

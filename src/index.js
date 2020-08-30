import React from "react";
import ReactDOM from "react-dom";
import "./components/css/sdf.css";
import "./components/css/styles.css";
import App from "./components/App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faStar, faStarHalf);

ReactDOM.render(<App />, document.getElementById("root"));

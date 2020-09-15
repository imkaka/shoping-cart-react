import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

import Counters from "./components/Counters";

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById("root")
);

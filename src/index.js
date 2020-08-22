import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import "./utils/CSS/App.css";

import App from "./App";
// import registerServiceWorker from "./utils/JS/registerServiceWorker";

import serviceWorker from "./serviceWorker";


ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker();

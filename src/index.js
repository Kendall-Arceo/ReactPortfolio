import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import "./utils/CSS/App.css";

import App from "./App";


import serviceWorker from "./serviceWorker";


ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker();

export default serviceWorker;
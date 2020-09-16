import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./src/serviceWorker";

serviceWorker.register();

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker();

export default serviceWorker;
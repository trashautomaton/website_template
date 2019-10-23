import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const title = "some react app";

ReactDOM.render(<App title={title} />, document.getElementById("app"));

module.hot.accept();

console.log(process.env.NODE_ENV);

//TODO
/*add button mixin, add production build to web pack*/
// add testing to webpack

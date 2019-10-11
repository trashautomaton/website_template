import "./App.scss";

import React from "react";

import catImage from "./assets/images/cat.jpg";

function App({ title }) {
  return (
    <div className="projectname-app__container">
      {title}
      <img src={catImage} />
    </div>
  );
}

export default App;

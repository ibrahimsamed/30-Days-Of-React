import React from "react";
import ReactDOM from "react-dom";
import htmlImage from "./html.png";
import cssImage from "./css.png";
import jslImage from "./js.png";
import reactImage from "./react.png";

const headerStyles = {
  fontFamily: "Helvetica Neue",
};
const header = (
  <header style={headerStyles}>
    <div className="header-wrapper">
      <h2> front End Technologies</h2>
    </div>
  </header>
);
const user = (
  <div className="images">
    <img src={htmlImage} alt="html image" style={{ height: 175, width: 175 }} />
    <img src={cssImage} alt="css image" style={{ height: 175, width: 175 }} />
    <img src={jslImage} alt="js image" style={{ height: 175, width: 175 }} />
    <img
      src={reactImage}
      alt="react image"
      style={{ height: 175, width: 175 }}
    />
  </div>
);
const appStyles = {
  backgroundColor: "#61DBFB",
};
const app = (
  <header style={appStyles}>
    <div className="'app">
      {header}
      {user}
    </div>
  </header>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);

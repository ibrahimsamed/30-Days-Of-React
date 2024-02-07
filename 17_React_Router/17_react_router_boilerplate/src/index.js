import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route index element={<Home />} />
          // <Route path="/home" component={Home} />
        </Routes>
      </Router>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

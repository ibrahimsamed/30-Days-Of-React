import React from "react";
import ReactDOM from "react-dom";
// if it is functional components
const App = () => {
  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge");
  };
  return <button onClick={greetPeople}> </button>;
};
const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement);

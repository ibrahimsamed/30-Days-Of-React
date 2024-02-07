import React, { Component } from "react";
// if it is functional components
class App extends Component {
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge");
  };
  render() {
    return <button onClick={this.greetPeople}> </button>;
  }
}

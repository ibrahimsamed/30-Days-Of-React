import React from "react";
import ReactDOM from "react-dom";
const Header = ({ data: { welcome, title } }) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
      </div>
    </header>
  );
};
const Numbers = ({ numbers }) => {
  const list = numbers.map((num) => (
    <button style={buttonStylesr} key={num}>
      {num}
    </button>
  ));
  return list;
};

const buttonStylesr = {
  backgroundColor: "red",
  padding: "0rem",
  width: "4rem",
  height: "4rem",
  border: "white",
  margin: 1,
  fontSize: 18,
  color: "white",
};

const App = () => {
  const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const data = {
    welcome: "30 Days Of React",
    title: "number generator",
  };
  return (
    <div className="container">
      <Header data={data} />
      <div className="deneme" style={{ position: "relative" }}>
        <Numbers numbers={numbers} position="TopRight" />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

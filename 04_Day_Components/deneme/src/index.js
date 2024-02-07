// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/ibrahim.png";

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <img src={asabenehImage} alt="ibrahim image" />
    <h2>ibrahim samed YALÇIN</h2>
  </div>
);
const userStyle = {
  color: "green",
};
const skills = ["html", "css", "javaScript"];
const buttonStyles = {
  padding: "10px",
  background: "rgb(0, 255, 0",
  border: "none",
  margin: "0 10px",
  borderRadius: 10,
};
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript", "python", "c", "bilmem ne"];
  const techsFormatted = techs.map((tech) => (
    <button style={buttonStyles}>{tech}</button>
  ));
  return techsFormatted;
};
const Button = () => {
  return (
    <button style={buttonStyles} type="button">
      Click Me
    </button>
  );
};
// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <UserCard />
      <h2 style={userStyle}>part time devoloper</h2>
      <h3>skills</h3>
    </div>
    <div>
      <TechList />
    </div>
  </main>
);
// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

// The App, or the parent or the container component
const App = () => (
  <div className="app">
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}

function SubHeader() {
  return <p>This will be an exciting course.</p>;
}

function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

function MainBody() {
  return (
    <div>
      <p>In this course, we will learn react js by building TaskOPedia!</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <p>Happy coding</p>;
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
);

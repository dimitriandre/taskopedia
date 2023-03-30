import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Header";
import Student from "./Student";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainBody() {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;
  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOPedia!
      </p>
      <p>Total Lecture - {lectureCount}</p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/*<div>
        Enter Task :{" "}
        <input maxLength={5} readOnly={false} placeholder="Ben"></input>
      </div>*/}
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
    <Student
      experience={2}
      name="Emmanuel Macron"
      headshot="https://api.lorem.space/image/face?w=150&h=150"
    />
    <Student
      experience={5}
      name="Angel Patrice"
      headshot="https://api.lorem.space/image/face?w=150&h=155"
    />
    <Student
      experience={7}
      name="Angel Patrice"
      headshot="https://api.lorem.space/image/face?w=150&h=156"
    />
    <Student
      experience={8}
      name="Kia Cool"
      headshot="https://api.lorem.space/image/face?w=150&h=159"
    />
    <Footer />
  </div>
);

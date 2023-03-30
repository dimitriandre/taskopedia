import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from ".header";

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

function Students() {
  const fullName = "Kris Walley";
  const programmingExp = 2;
  return (
    <div className="container p-4">
      <div className="row">Students enrolled</div>
      <div className="row border">
        <div className="col-2">
          <img
            src={`https://ui-avatars.com/api/?name=${fullName}`}
            classname="w-100"
          ></img>
        </div>
        <div className="col-10">
          {fullName}
          <br />
          Programming Experience {programmingExp} years
        </div>
      </div>
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
    <Students />
    <Footer />
  </div>
);

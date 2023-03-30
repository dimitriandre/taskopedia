import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function HeaderContent() {
  return <h1>REACT COURSE</h1>;
}

function MainBody() {
  return (
    <div>
      <p>In this course, we will learn react js by building TaskOPedia!</p>
      <ul>
        <li>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
      <p>Happy coding</p>
    </div>
  );
}

function FooterContent() {
  return <p>Happy coding</p>;
}

root.render(
  <div>
    <HeaderContent />
    <MainBody />
    <FooterContent />
  </div>
);

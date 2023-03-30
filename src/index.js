import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Header";
import Student from "./Student";
import Footer from "./Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <MainBody />
    <div className="container p-1">Students Enrolled</div>
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

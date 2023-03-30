import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <div px-4>
    <MainBody />
    </div>
    <Footer />
  </div>
);
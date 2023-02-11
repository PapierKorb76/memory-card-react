import React from "react";
import logo from "./assets/logo.png";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="nav-container">
        <img src={logo} alt="" />
        <h1>Memory Guns</h1>
      </div>
    </div>
  );
}

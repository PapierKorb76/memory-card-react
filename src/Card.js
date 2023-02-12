import React from "react";
import "./card.scss";

export default function Card({ sourceImg, text, description }) {
  return (
    <div className="Card">
      <div
        style={{ backgroundImage: `url(${sourceImg})` }}
        className="img-holder"
      ></div>
      <h1>{text}</h1>
      <p>{description}</p>
    </div>
  );
}

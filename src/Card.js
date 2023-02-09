import React from "react";
import "./card.scss";

export default function Card({ sourceImg, text }) {
  return (
    <div className="Card">
      <img src={sourceImg} alt="ak-47" />
      <h1>{text}</h1>
    </div>
  );
}

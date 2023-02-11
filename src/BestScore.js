import React from "react";
import "./point-counter.scss";

export default function BestScore({ bestScore }) {
  return (
    <div className="BestScore">
      <h3>Best Score</h3>
      <h1>{bestScore}</h1>
    </div>
  );
}

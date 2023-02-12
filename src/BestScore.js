import React from "react";
import "./point-counter.scss";
export default function BestScore({ bestScore }) {
  return (
    <div className="BestScore" style={{ color: "#fff" }}>
      <h2>Best Score</h2>
      <h1>{bestScore}</h1>
    </div>
  );
}

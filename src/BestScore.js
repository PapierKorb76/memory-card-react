import React from "react";
import bestScoreStyling from "../src/assets/styling/point-counter.scss";
export default function BestScore({ bestScore }) {
  return (
    <div className="BestScore" style={bestScoreStyling}>
      <h2>Best Score</h2>
      <h1>{bestScore}</h1>
    </div>
  );
}

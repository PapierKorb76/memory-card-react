import React from "react";
import "./assets/styling/point-counter.scss";

export default function PointCounter({ points }) {
  return (
    <div className="PointCounter" style={{ color: "#fff" }}>
      <h2>Points</h2>
      <h1>{points}</h1>
    </div>
  );
}

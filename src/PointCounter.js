import React from "react";
import "./point-counter.scss";

export default function PointCounter({ points }) {
  return (
    <div className="PointCounter">
      <h2>Points</h2>
      <h1>{points}</h1>
    </div>
  );
}

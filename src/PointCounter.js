import React from "react";
import "./card.scss";

export default function PointCounter({ points }) {
  return (
    <div className="PointCounter">
      <h3>Points</h3>
      <h1>{points}</h1>
    </div>
  );
}

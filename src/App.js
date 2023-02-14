import stylingCard from "../src/assets/styling/card.scss";
import stylingPointCounter from "../src/assets/styling/point-counter.scss";
import Card from "./Card";
import cardArray from "./cardArray";
import PointCounter from "./PointCounter";
import BestScore from "./BestScore";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function App() {
  let [shuffle, setShuffle] = useState(false);
  let [points, setPoints] = useState(0);
  let [cardClicked, setCardClicked] = useState([]);
  let [bestScore, setBestScore] = useState(0);

  const unique = Array.from(new Set(cardClicked));

  useEffect(() => {
    if (unique.length !== cardClicked.length) {
      if (points > bestScore) {
        setBestScore(points - 1);
      }
      setPoints(0);
      setCardClicked([]);
    }
  }, [cardClicked, shuffle, points, unique, bestScore]);

  function shuffleCards() {
    var i = 0,
      j = 0,
      temp = null;
    for (i = cardArray.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cardArray[i];
      cardArray[i] = cardArray[j];
      cardArray[j] = temp;
    }
    setShuffle(!shuffle);
    setPoints(points + 1);
  }

  const style = document.body.style;
  useEffect(() => {
    style.margin = "0px";
    style.padding = "0px";
    style.width = "100%";
    style.height = "100vh";
    style.background = "#555";
    style.overflow = "hidden";
  });

  return (
    <div className="App">
      <Navbar />
      <div className="score-container" style={stylingPointCounter}>
        <PointCounter points={points} />
        <BestScore bestScore={bestScore} />
      </div>
      <div className="card-holder">
        {cardArray.map((card) => (
          <div
            key={card.id}
            onClick={() => {
              setCardClicked((cardClicked) => [...cardClicked, card.text]);
              shuffleCards();
            }}
          >
            <Card
              sourceImg={card.sourceImg}
              text={card.text}
              key={card.id}
              description={card.description}
              style={stylingCard}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

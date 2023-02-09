import "./card.scss";
import Card from "./Card";
import { useEffect, useState } from "react";
import cardArray from "./cardArray";

export default function App() {
  let [shuffle, setShuffle] = useState(false);

  if (shuffle === true) {
    setShuffle(false);
  }

  useEffect(() => {
    console.log(cardArray);
  }, [shuffle]);

  function shuffleCards(e) {
    var i = 0,
      j = 0,
      temp = null;
    for (i = cardArray.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cardArray[i];
      cardArray[i] = cardArray[j];
      cardArray[j] = temp;
    }
    setShuffle(true);
  }

  const style = document.body.style;
  useEffect(() => {
    style.margin = "0px";
    style.padding = "0px";
    style.width = "100%";
    style.height = "100vh";
  });

  return (
    <div className="App">
      <div className="card-holder">
        {cardArray.map((card) => (
          <div key={card.id} onClick={shuffleCards}>
            <Card sourceImg={card.sourceImg} text={card.text} key={card.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

import "./Card.scss";
import Card from "./Card";
import { useEffect } from "react";
import cardArray from "./cardArray";

export default function App() {
  useEffect(() => {
    console.log("ciao");
  }, []);

  const style = document.body.style;
  useEffect(() => {
    style.margin = "0px";
    style.width = "100%";
    style.height = "100vh";
  });

  return (
    <div className="App">
      <div className="card-holder">
        {cardArray.map((card) => (
          <Card sourceImg={card.sourceImg} text={card.text} key={card.id} />
        ))}
      </div>
    </div>
  );
}

import Card from "./Card";
import ak47img from "./assets/ak-47.png";

export default function App() {

  let cardArray = [
    {
      sourceImg: ak47img,
      text: "AK-47",
      id: 0
    },
    {
      sourceImg: "",
      text: "",
      id: 1
    },
    {
      sourceImg: "",
      text: "",
      id: 2
    },
    {
      sourceImg: "",
      text: "",
      id: 3
    },
    {
      sourceImg: "",
      text: "",
      id: 4
    },
    {
      sourceImg: "",
      text: "",
      id: 5
    }
  ];

  console.log(ak47img)
  return (
    <div className="App">
      {cardArray.map((card) => (
        <Card sourceImg={card.sourceImg} text={card.text} key={card.id}/>
      ))}
    </div>
  );
}

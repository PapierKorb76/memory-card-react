import "./Card.scss";

export default function Card({ imgSource, text }) {
  return (
    <div className="Card">
      <div className="card-container">
        <img src={imgSource} alt="" />
        <h1>{text}</h1>
      </div>
    </div>
  );
}

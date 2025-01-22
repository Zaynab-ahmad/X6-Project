import "./ReviewsCard.css";
import React from "react";
import Rating4 from "../../../assets/Icons/fourAndHalfStar.png";
import Rating5 from "../../../assets/Icons/fiveStars.png";
export default function ReviewsCard({ from, name, numbervalue, paragraph, rating }) {
  return (
    <div className="tayCard">
      <div className="tayCardTiltle">
        <div className="tayNameAndFrom">
          <h4 className="tayName">{name}</h4>
          <h5 className="tayfrom">{from}</h5>
        </div>
        <div className="tayValue">
         <img className="tayStars" src={Rating4} alt="Rating" style={{ display: rating ? "block" : "none" }} />
          <img className="tayStars" src={Rating5} alt="Rating" style={{ display: rating ? "none" : "block" }} />
          <h6 className="tayNumber">{numbervalue} </h6>
        </div>
      </div>
      <p className="tayParagraph">{paragraph}</p>
    </div>
  );
}

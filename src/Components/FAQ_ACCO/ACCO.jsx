import { useState } from "react";
import "./ACCO.css";
import plus from "../../assets/Icons/plus.svg";
import minus from "../../assets/Icons/minus.svg";

export default function ACCO({ number, que, ans }) {
  const [isopen, setisopen] = useState(false);

  return (
    <div onClick={() => setisopen(!isopen)} className="accordion">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-center">
          <div className="accordionNum">{number}</div>
          <div className="accordionBody">
            <div className="accordionQue">{que}</div>
            {isopen && <div className="accordionAns">{ans}</div>}
          </div>
        </div>
        <div className="accordion-state">
          <img src={isopen ? minus : plus} alt="toggle indicator" />
        </div>
      </div>
      {isopen && <div className="accordionAnsMobile">{ans}</div>}
    </div>
  );
}

import React, { useState } from "react";
import "./ShowsChapter.css";
import downArrow from "./../../assets/Icons/downarrow.svg";
import upArrow from "./../../assets/Icons/uparrow.svg";
import { Episodes } from "../../Data/data";
import ShowsEpisodes from "../ShowsEpisodes/ShowsEpisodes";

export default function ShowsChapter({ Season, epnum }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={!isOpen? "showsChapterZA": "openChapterContentZA"}>
      <div className="showsChapterTitleZA">
        <div className="seasonTitleZA">
          <h3 className="epH">Season {Season}</h3>
          <p className="epE">{epnum} Episodes</p>
        </div>
        <div
          className="chapterArrow"
          onClick={toggleAccordion}
          style={{ cursor: "pointer" }}
        >
          <img src={isOpen ? upArrow : downArrow} alt="Toggle Arrow" />
        </div>
      </div>

      {isOpen && (
        <div className="showsChapterContentZA">
          <div className="d-flex flex-column">
            {Episodes.map((episode, index) => (
              <ShowsEpisodes
                key={index}
                num={episode.num}
                img={episode.src}
                title={episode.title}
                duration={episode.duration}
                dis={episode.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react"; 
import "./MoviesAndShowsHero.css";
import HomeMoviesAndShowsTitle from "../../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import HomeParagraph from "../../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph";
import Button from "../../Buttons/Button";
import Play from "../../../assets/Icons/playicon1.svg";
import Plus from "../../../assets/Icons/plus.svg";
import Like from "../../../assets/Icons/like.svg";
import Volume from "../../../assets/Icons/volume.svg";

export default function MoviesAndShowsHero({ src, videoLink, title, description }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div
      className="MoviesAndShowsHeroZA xContainer"
      style={{ backgroundImage: isVideoPlaying ? "none" : `url(${src})` }}
    >
      <div className="heroOverlayZA"></div>

      {!isVideoPlaying ? (
        <div className="heroContentZA">
          <div className="MoviesAndShowsHeroTZA">
          <HomeMoviesAndShowsTitle
            title={title}
            titlePadding="else"
            fontSizeType="type2"
            lineHeightType="type2"
          />
          <div className="d-lg-block d-none">
          <HomeParagraph paragraph={description} />
          </div>


          </div>
          <div className="heroButtonsZA d-flex align-items-center justify-content-center">
            <Button
              text={
                <>
                  <img src={Play} alt="play" />
                  Play Now
                </>
              }
              onClick={handlePlayClick}
              isFullWidth={true}
              isSmallerBorderRaduis={false}
              isBlack={false}
              paddingType="type4"

            />
            <div className="moviesHeroIconsGroup">
            <div className="heroIconsZA">
              <img src={Plus} alt="Plus" />
            </div>
            <div className="heroIconsZA">
              <img src={Like} alt="Like" />
            </div>
            <div className="heroIconsZA">
              <img src={Volume} alt="Volume" />
            </div>
            </div>
          </div>
        </div>
      ) : 
        <iframe
          className="heroVideoZA xContainer"
          src={`https://www.youtube.com/embed/${videoLink.split("v=")[1]}?autoplay=1`}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      
        
      }
    </div>
  );
}

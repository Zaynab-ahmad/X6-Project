import "./HomeHero.css";
import HeroCenter from "../../../assets/Imgs/hero2.png";
import { useNavigate } from "react-router-dom";
import Button from "../../Buttons/Button";
import Play from "../../../assets/Icons/playicon1.svg";

export default function HomeHero() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/movies-and-shows");
  };
  return (
    <div className="heroContainer">
      <div className="kr-subcontainer-1">
        <div className="layer-1"></div>
        <div className="layer-2"></div>
        <div className="HeroCenter">
          <img className="HeroCenterImg" alt="Hero Icon" src={HeroCenter} />
        </div>
      </div>
      <div className="kr-subcontainer-2">
        <div className="kr-text-container">
          <h1>The Best Streaming Experiance</h1>
          <p className="longParagraph">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <p className="shortParagraph">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere.
          </p>
        </div>
        <div className="kr-btn">
          <Button
            text={
              <>
                <img className="playImg" src={Play} alt="play" />
                Start Watching Now
              </>
            }
            isFullWidth={true}
            isSmallerBorderRaduis={false}
            isBlack={false}
            paddingType="type1"
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

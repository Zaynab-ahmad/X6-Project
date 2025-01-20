import "./MoviesAndShowsHero.css";
import HomeMoviesAndShowsTitle from "../../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import HomeParagraph from "../../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph";
import Button from "../../Buttons/Button";
import Play from "../../../assets/Icons/playicon1.svg";
import Plus from "../../../assets/Icons/plus.svg";
import Like from "../../../assets/Icons/like.svg";
import volume from "../../../assets/Icons/volume.svg";

export default function MoviesAndShowsHero({src, title, description }) {
  return (
<div
 className="MoviesAndShowsHeroZA xContainer"
      style={{ backgroundImage: `url(${src})` }}
>
      <div className="heroOverlayZA"></div>
      <div className="heroContentZA">
        <HomeMoviesAndShowsTitle
          title={title}
          home={false}
          fontSizeType="type2"
          lineHeightType="type2"
        />
        <HomeParagraph paragraph={description} />
        <div className="heroButtonsZA d-flex align-items-center justify-content-center">
          <Button
            text={
              <>
                <img src={Play} alt="play" />
                Play Now
              </>
            }
            isFullWidth={true}
            isSmallerBorderRaduis={false}
            isBlack={false}
          />
          <div className="heroIconsZA">
            <img src={Plus} alt="Plus" />
          </div>
          <div className="heroIconsZA">
            <img src={Like} alt="Like" />
          </div>
          <div className="heroIconsZA">
            <img src={volume} alt="volume" />
          </div>
        </div>
      </div>
    </div>
  );
}

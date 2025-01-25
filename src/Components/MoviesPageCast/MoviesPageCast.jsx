import "./MoviesPageCast.css";
import CastSlider from "../Sliders/CastSlider/CastSlider";
import { MoviesCast } from "../../Data/data";
import { ShowCast } from "../../Data/data";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export default function MoviesPageCast({ genre }) {
  const castData = genre === "movies" ? MoviesCast : ShowCast;

  return (
    <div className="openpageDevs">
      <ScrollAnimation>
        <h3 className="openpageTitle">Cast</h3>
      </ScrollAnimation>
      <ScrollAnimation>
        <CastSlider cast={castData} />
      </ScrollAnimation>
    </div>
  );
}

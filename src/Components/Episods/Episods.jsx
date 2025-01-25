import "./Episods.css";
import ShowsChapter from "../../Components/ShowsChapter/ShowsChapter";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
export default function Episods() {
  return (
    <div className="episodsSecZA">
      <h3 className="EpHeader">Seasons and Episodes</h3>
      <ScrollAnimation>
        <ShowsChapter Season="1" epnum="9" />
      </ScrollAnimation>
      <ScrollAnimation>
        <ShowsChapter Season="2" epnum="5" />
      </ScrollAnimation>
      <ScrollAnimation>
        <ShowsChapter Season="3" epnum="7" />
      </ScrollAnimation>
    </div>
  );
}

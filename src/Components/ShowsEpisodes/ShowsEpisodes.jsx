import "./ShowsEpisodes.css";
import EpisodesPlay from "./../../assets/Icons/episodesplay.svg";
import Clock from "./../../assets/Icons/clock2.svg";

export default function ShowsEpisodes({ num, img, title, duration, dis }) {
  return (
    <div className="showsEpisodesZA">
      <div className="episodesNumZA">0{num}</div>

      <div className="episodesImgZA" style={{ backgroundImage: `url(${img})` }}>
        <div className="episodeOverlay"></div>
        <div className="epIconZA">
        <img src={EpisodesPlay} alt="play Icon" />
        </div>
      </div>

      <div className="episodesInfoZA">
        <div className="episodesTitleZA">
          <h3 className="epHZ">{title}</h3>
          <div className="EpDurationZA">
            <img src={Clock} alt="Clock" />
            <p className="epPZ"> {duration} min </p>
          </div>
        </div>
        <div className="episodesDisZA">
          <p>{dis}</p>
        </div>
      </div>
    </div>
  );
}

import "./ShowsSection.css";
import OurGenres from "../OurGenres/OurGenres";
import PopularGenres from "../PopularGenres/PopularGenres";
import NewReleasedShows from "../NewReleasedShows/NewReleasedShows";
import TrendingShows from "../TrendingShows/TrendingShows";
import MustWatchShows from "../MustWatchShows/MustWatchShows";

export default function ShowsSection({text}) {
  return (
    <div id="showsSec" className=" xContainer customMargin">
      <div className="showsSectionZA">
        <div className="showsBadgeZA">Shows</div>
        <OurGenres movies={false}  text={text}/>
        <div className="MA-pop-sh">
        <PopularGenres sho={false} text={text}/>
        </div>
        <TrendingShows text={text}/>
        <NewReleasedShows text={text}/>
        <MustWatchShows text={text}/>
      </div>
    </div>
  );
}

import "./ShowsSection.css";
import OurGenres from "../OurGenres/OurGenres";
import PopularGenres from "../PopularGenres/PopularGenres";
import NewReleasedShows from "../NewReleasedShows/NewReleasedShows";
import TrendingShows from "../TrendingShows/TrendingShows";
import MustWatchShows from "../MustWatchShows/MustWatchShows";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export default function ShowsSection({text}) {
  return (
    <div id="showsSec" className=" xContainer customMargin">
      <div className="showsSectionZA">
        <div className="showsBadgeZA">Shows</div>
        <ScrollAnimation>
        <OurGenres movies={false}  text={text}/>          
        </ScrollAnimation>
        <ScrollAnimation>
        <div className="MA-pop-sh">
        <PopularGenres sho={false} text={text}/>
        </div>
        </ScrollAnimation>
        <ScrollAnimation>
        <TrendingShows text={text}/>
        </ScrollAnimation>
        <ScrollAnimation>
        <NewReleasedShows text={text}/>
        </ScrollAnimation>
        <ScrollAnimation>
        <MustWatchShows text={text}/>
        </ScrollAnimation>
      </div>
    </div>
  );
}

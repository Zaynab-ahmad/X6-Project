import "./MoviesSection.css";
import OurGenres from "../OurGenres/OurGenres";
import TrendingNow from "../TrendingNow/TrendingNow";
import NewReleases from "../NewReleases/NewReleases";
import MustWatch from "../MustWatch/MustWatch";
import PopularGenres from "../PopularGenres/PopularGenres";

export default function MoviesSection() {
  return (
    <div className=" xContainer customMargin">
      <div className="moviesSectionZA">
        <div className="moviesBadgeZA">Movies</div>
        <OurGenres />
        <PopularGenres sho={true} />
        <TrendingNow />
        <NewReleases />
        <MustWatch />
      </div>
    </div>
  );
}

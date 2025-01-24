import "./MoviesSection.css";
import OurGenres from "../OurGenres/OurGenres";
import TrendingNow from "../TrendingNow/TrendingNow";
import NewReleases from "../NewReleases/NewReleases";
import MustWatch from "../MustWatch/MustWatch";
import PopularGenres from "../PopularGenres/PopularGenres";

export default function MoviesSection({text}) {
  return (
    <div className=" xContainer customMargin">
      <div className="moviesSectionZA">
        <div className="moviesBadgeZA">Movies</div>
        <OurGenres movies={true} text ={text}/>
        <PopularGenres sho={true} text ={text}/>
        <TrendingNow text ={text} />
        <NewReleases text ={text} />
        <MustWatch text ={text} />
      </div>
    </div>
  );
}

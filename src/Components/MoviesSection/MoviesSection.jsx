import "./MoviesSection.css";
import OurGenres from "../OurGenres/OurGenres";
import TrendingNow from "../TrendingNow/TrendingNow";
import NewReleases from "../NewReleases/NewReleases";
import MustWatch from "../MustWatch/MustWatch";
import PopularGenres from "../PopularGenres/PopularGenres";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export default function MoviesSection({text}) {
  return (
    <div className=" xContainer customMargin">
      <div className="moviesSectionZA">
        <div className="moviesBadgeZA">Movies</div>
        <ScrollAnimation>
        <OurGenres movies={true} text ={text}/>        
        </ScrollAnimation>
        <ScrollAnimation>
        <PopularGenres sho={true} text ={text}/>
        </ScrollAnimation>
        <ScrollAnimation>
        <TrendingNow text ={text} />
        </ScrollAnimation>
        <ScrollAnimation>
        <NewReleases text ={text} />
        </ScrollAnimation>
        <ScrollAnimation>
        <MustWatch text ={text} />
        </ScrollAnimation>
      </div>
    </div>
  );
}

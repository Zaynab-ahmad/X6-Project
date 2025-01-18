import "./MoviesSection.css";
import OurGenres from "../OurGenres/OurGenres";
import PopularGenres from "../PopularGenres/PopularGenres";

export default function MoviesSection() {
  return (
    <div className=" xContainer customMargin">
      <div className="moviesSectionZA">
        <div className="moviesBadgeZA">Movies</div>
        <OurGenres />
        <PopularGenres sho={true} />
      </div>
    </div>
  );
}

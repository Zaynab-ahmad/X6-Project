import "./ShowsSection.css";

import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import OurGenres from "../OurGenres/OurGenres";

export default function ShowsSection() {
  return (
    <div id = "showsSec" className=" xContainer customMargin">
      <div className="showsSectionZA">
        <div className="showsBadgeZA">Shows</div>
        <HomeMoviesAndShowsTitle
          title="Our Genres"
          home={false}
          fontSizeType="type3"
          lineHeightType="type3"
        />
        <OurGenres />
      </div>
    </div>
  );
}

import "./ShowsSection.css";

import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import OurGenres from "../OurGenres/OurGenres";
import PopularGenres from "../PopularGenres/PopularGenres";

export default function ShowsSection() {
  return (
    <div className=" xContainer customMargin">
      <div className="showsSectionZA">
        <div className="showsBadgeZA">Shows</div>
        <HomeMoviesAndShowsTitle
          title="Our Genres"
          home={false}
          fontSizeType="type3"
          lineHeightType="type3"
        />
        <OurGenres />
        <div className="MA-pop-sh">
          <HomeMoviesAndShowsTitle
            title="Popular Top 10 In Geners"
            home={false}
            fontSizeType="type3"
            lineHeightType="type3"
          />
          <PopularGenres 
          sho = {false}
          />
        </div>
       
      </div>
    </div>
  );
}

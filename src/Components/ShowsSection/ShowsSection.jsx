import "./ShowsSection.css";

import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import OurGenres from "../OurGenres/OurGenres";
import PopularGenres from "../PopularGenres/PopularGenres";
import NewReleasedShows from "../NewReleasedShows/NewReleasedShows";
import TrendingShows from "../TrendingShows/TrendingShows";
import MustWatchShows from "../MustWatchShows/MustWatchShows";

export default function ShowsSection() {
  return (
    <div id = "showsSec" className=" xContainer customMargin">
      <div className="showsSectionZA">
        <div className="showsBadgeZA">Shows</div>
        <HomeMoviesAndShowsTitle
          title="Our Genres"
          titlePadding="movies"
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
        <HomeMoviesAndShowsTitle title="Trending Shows" home={false} fontSizeType="type3" lineHeightType="type3"/>
        <TrendingShows/>
        <HomeMoviesAndShowsTitle title="New Released Shows" home={false} fontSizeType="type3" lineHeightType="type3"/>
        <NewReleasedShows/>
        <HomeMoviesAndShowsTitle title="Must-Watch Shows" home={false} fontSizeType="type3" lineHeightType="type3"/>
        <MustWatchShows/>

      </div>
    </div>
  );
}

import './MoviesSection.css' 
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import OurGenres from '../OurGenres/OurGenres';
import TrendingNow from '../TrendingNow/TrendingNow';
import MovieShowCard from '../Cards/MovieShowCard/MovieShowCard';
import NewReleases from '../NewReleases/NewReleases';
import MustWatch from '../MustWatch/MustWatch';
import PopularGenres from "../PopularGenres/PopularGenres";

export default function MoviesSection() {
  return (
    <div className=' xContainer customMargin'>
    <div className='moviesSectionZA'>
        <div className='moviesBadgeZA'>
            Movies
        </div>
      <OurGenres/>   
      <PopularGenres sho={true} />
      <HomeMoviesAndShowsTitle title="Trending Now" home={false} fontSizeType="type3" lineHeightType="type3"/>
      <TrendingNow/>   
      <HomeMoviesAndShowsTitle title="New Releases" home={false} fontSizeType="type3" lineHeightType="type3"/>
      <NewReleases/>     
      <HomeMoviesAndShowsTitle title="Must-Watch Movies" home={false} fontSizeType="type3" lineHeightType="type3"/>
      <MustWatch/>
    </div>
    </div>
  );
}

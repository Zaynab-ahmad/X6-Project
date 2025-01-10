import './MoviesSection.css'
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import OurGenres from '../OurGenres/OurGenres';

export default function MoviesSection() {
      
  return (
    <div className=' xContainer customMargin'>

    <div className='moviesSectionZA'>
        <div className='moviesBadgeZA'>
            Movies
        </div>
      <HomeMoviesAndShowsTitle title="Our Genres" home={false} fontSizeType="type3" lineHeightType="type3"/>
      <OurGenres/>   
      
    </div>
    </div>

  )
}

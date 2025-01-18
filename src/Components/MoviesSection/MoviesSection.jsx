import './MoviesSection.css'
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";
import OurGenres from '../OurGenres/OurGenres';
import PopularGenres from '../PopularGenres/PopularGenres';

export default function MoviesSection() {
      
  return (
    <div className=' xContainer customMargin'>

    <div className='moviesSectionZA'>
        <div className='moviesBadgeZA'>
            Movies
        </div>

      <HomeMoviesAndShowsTitle title="Our Genres" home={false} fontSizeType="type3" lineHeightType="type3"/>
      <OurGenres/>  
      <div className="MA-pop-Mo">
      <HomeMoviesAndShowsTitle
          title="Popular Top 10 In Geners"
          home={false}
          fontSizeType="type3"
          lineHeightType="type3"
          className ="MA-margin"
        />
      <PopularGenres
      sho={true}
      />
      </div>
     

      
    </div>
    </div>

  )
}

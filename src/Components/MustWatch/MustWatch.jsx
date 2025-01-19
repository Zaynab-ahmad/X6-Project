import './MustWatch.css'
import CardSlider from "../Sliders/CardSlider/CardSlider";
import {mustWatchMoviesimages} from "../../Data/data";
import MovieShowCard from '../Cards/MovieShowCard/MovieShowCard';
import fourAndHalf from '../../assets/Icons/fourAndHalfStar.png'
import fiveStars from '../../assets/Icons/fiveStars.png'
import fourStars from '../../assets/Icons/fourStars.png'
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";

export default function MustWatch() { 
    const cards4Data = [
        { length: "1h 57min", rating: fourAndHalf , source: mustWatchMoviesimages[0].src },
        { length: "1h 30min", rating: fourStars, source: mustWatchMoviesimages[1].src },
        { length: "1h 42min", rating: fourAndHalf, source: mustWatchMoviesimages[2].src },
        { length: "2h 10min", rating: fourStars, source: mustWatchMoviesimages[3].src },
        
      ];
      const cards4 = cards4Data.map((data, index) => (
        <MovieShowCard
        length={data.length}
        views={data.views}
        src={data.source}
        key={index}
        section={"MustWatch"}
        rating={data.rating}
        ratio="MustWatch"
        />
      ));
  return (
    <div className='moviesMarginZA'>
    <HomeMoviesAndShowsTitle title="Must-Watch Movies" home={false} fontSizeType="type3" lineHeightType="type3"/>  
    <CardSlider cards={cards4} slidesToShow={4} page="moviesAndShows" sec="movies" top="type2" right={true} />

    </div>
  )
}
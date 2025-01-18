import './MustWatchShows.css'
import CardSlider from "../Sliders/CardSlider/CardSlider";
import {MustWatchShowsImages} from "../../Data/data";
import MovieShowCard from '../Cards/MovieShowCard/MovieShowCard';
import fourAndHalf from '../../assets/Icons/fourAndHalfStar.png'
import fiveStars from '../../assets/Icons/fiveStars.png'
import fourStars from '../../assets/Icons/fourStars.png'
export default function MustWatchShows() { 
    const cards4Data = [
        { length: "7h 40min", rating: fourAndHalf , source: MustWatchShowsImages[0].src },
        { length: "12h 23min", rating: fiveStars, source: MustWatchShowsImages[1].src },
        { length: "10h 30min", rating: fourStars, source: MustWatchShowsImages[2].src },
        { length: "8h 20min", rating: fourAndHalf, source: MustWatchShowsImages[3].src },
        
      ];
      const cards4 = cards4Data.map((data, index) => (
        <MovieShowCard
        length={data.length}
        views={data.views}
        src={data.source}
        key={index}
        section={"MustWatch"}
        rating={data.rating}
        />
      ));
  return (
    <div>
    <CardSlider cards={cards4} slidesToShow={4} />

    </div>
  )
}
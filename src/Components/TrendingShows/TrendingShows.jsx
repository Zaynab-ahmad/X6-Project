import './TrendingShows.css'
import CardSlider from "../Sliders/CardSlider/CardSlider";
import {TrendingShowsImages} from "../../Data/data";
import MovieShowCard from '../Cards/MovieShowCard/MovieShowCard';

export default function TrendingShows() {
    const cards3Data = [
        { length:"8h 20min", seasons:"4 season" , source: TrendingShowsImages[0].src },
        { length:"12h 23min", seasons:"5 season" ,  source: TrendingShowsImages[1].src },
        { length:"14h 30min", seasons:"3 season" ,  source: TrendingShowsImages[2].src },
        { length:"7h 40min", seasons:"2 season" ,  source: TrendingShowsImages[3].src },
      ];
      const cards3 = cards3Data.map((data, index) => (
        <MovieShowCard
        length={data.length}
        views={data.views}
        releaseDate={data.releaseDate}
        src={data.source}
        key={index}
        section={"NewReleasedShows"}
        seasons={data.seasons}
        />
      ));
  return (
    <div>
    <CardSlider cards={cards3} slidesToShow={4} />
    </div>
  )
}
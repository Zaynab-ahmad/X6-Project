import './TrendingNow.css'
import CardSlider from "../Sliders/CardSlider/CardSlider";
import {Trendingimages} from "../../Data/data";
import MovieShowCard from '../Cards/MovieShowCard/MovieShowCard';

export default function TrendingNow() {
    const cards2Data = [
        { length: "1h 30min", views: "2K", source: Trendingimages[0].src },
        { length: "1h 57min", views: "1.5K", source: Trendingimages[1].src },
        { length: "2h 10min", views: "1.8K", source: Trendingimages[2].src },
        { length: "2h 20min", views: "3K", source: Trendingimages[3].src },
        { length: "1h 42min", views: "5K", source: Trendingimages[4].src },
      ];
      const cards2 = cards2Data.map((data, index) => (
        <MovieShowCard
        length={data.length}
        views={data.views}
        src={data.source}
        key={index}
        section={"TrendingMovies"}
        />
      ));
  return (
    <div>
    <CardSlider cards={cards2} slidesToShow={5} />

    </div>
  )
}

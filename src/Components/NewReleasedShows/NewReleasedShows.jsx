import './NewReleasedShows.css'
import CardSlider from "../Sliders/CardSlider/CardSlider";
import {NewReleasedShowsImages} from "../../Data/data";
import MovieShowCard from '../Cards/MovieShowCard/MovieShowCard';

export default function NewReleasedShows() {
    const cards3Data = [
        { length:"12h 32min", seasons:"5 season" , source: NewReleasedShowsImages[0].src },
        { length:"7h 40min", seasons:"2 season" ,  source: NewReleasedShowsImages[1].src },
        { length:"8h 20min", seasons:"4 season" ,  source: NewReleasedShowsImages[2].src },
        { length:"10h 30min", seasons:"3 season" ,  source: NewReleasedShowsImages[3].src },
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
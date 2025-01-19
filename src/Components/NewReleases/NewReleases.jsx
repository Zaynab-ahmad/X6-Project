import './NewReleases.css'
import CardSlider from "../Sliders/CardSlider/CardSlider";
import {NewreleaseImages} from "../../Data/data";
import MovieShowCard from '../Cards/MovieShowCard/MovieShowCard';
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";


export default function NewReleases() {
    const cards3Data = [
        { releaseDate:"14 April 2023", source: NewreleaseImages[0].src },
        { releaseDate:"22 April 2023",  source: NewreleaseImages[1].src },
        { releaseDate:"13 April 2023",  source: NewreleaseImages[2].src },
        { releaseDate:"19 April 2023",  source: NewreleaseImages[3].src },
        { releaseDate:"11 April 2023",  source: NewreleaseImages[4].src },
      ];
      const cards3 = cards3Data.map((data, index) => (
        <MovieShowCard
        length={data.length}
        views={data.views}
        releaseDate={data.releaseDate}
        src={data.source}
        key={index}
        section={"NewReleases"}
        ratio="Movies"
        />
      ));
  return (
    <div className='moviesMarginZA'>
    <HomeMoviesAndShowsTitle title="New Releases" home={false} fontSizeType="type3" lineHeightType="type3"/>
    <CardSlider cards={cards3} slidesToShow={5} page="moviesAndShows" sec="movies" top="type2" right={true}/>
    </div>
  )
}
import './PopularGenres.css' ;
import {
  ActionMovies,
  AdventureMovies,
  ComedyMovies,
  DramaMovies,
} from "../../Data/data";
import MultiImgsCard from "../Cards/MltiImgsCard/MultiImgsCard";
import CardSlider from "../Sliders/CardSlider/CardSlider";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";



export default function PopularGenres({sho}) {
  const cardsDataMA = [
    { text: "Action", imagesArray: sho ? ActionMovies.slice(4, 8) : ActionMovies.slice(8, 12) }  ,
    { text: "Adventure", imagesArray: [...AdventureMovies.slice(0, 2), ...AdventureMovies.slice(-2)] },
    { text: "Comedy", imagesArray: [ ...ComedyMovies.slice(1,2) , ...ComedyMovies.slice(-3)] },
    { text: "Drama", imagesArray: DramaMovies.slice(4, 8) }, 
  ];
  const cardsMA = cardsDataMA.map((data, index) => (
    <MultiImgsCard
      key={index}
      text={data.text}
      imagesArray={data.imagesArray}
      badge={true}
      pageName="moviesAndShowsPage" 
      genre={sho ? "movies" : "shows"}
    />
  ));
  return (
    <div className="moviesMarginZA">
    <div className="MA-pop-Mo">
      <HomeMoviesAndShowsTitle
          title="Popular Top 10 In Geners"
          home={false}
          fontSizeType="type3"
          lineHeightType="type3"
          className ="MA-margin"
        />
        </div>        
     <CardSlider cards={cardsMA} slidesToShow={4} page="moviesAndShows" sec="genres" top = "type2" right={false} />
    </div>
   
  )
}

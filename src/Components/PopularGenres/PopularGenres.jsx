import './PopularGenres.css' ;
import {
  ActionMovies,
  AdventureMovies,
  ComedyMovies,
  DramaMovies,
} from "../../Data/data";
import MultiImgsCard from "../Cards/MltiImgsCard/MultiImgsCard";
import CardSlider from "../Sliders/CardSlider/CardSlider";


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
    />
  ));
  return (
    <>
     <CardSlider cards={cardsMA} slidesToShow={4} />
    </>
   
  )
}

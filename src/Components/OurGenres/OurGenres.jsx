import './OurGenres.css'
import MultiImgsCard from "../Cards/MltiImgsCard/MultiImgsCard";
import CardSlider from "../Sliders/CardSlider/CardSlider";

import {
  ActionMovies,
  AdventureMovies,
  ComedyMovies,
  DramaMovies,
  HorrorMovies,
} from "../../Data/data";

export default function OurGenres() {
    const cardsData = [
        { text: "Action", imagesArray: ActionMovies.slice(0, 4) },
        { text: "Adventure", imagesArray: AdventureMovies.slice(0, 4) },
        { text: "Comedy", imagesArray: ComedyMovies.slice(0, 4) },
        { text: "Drama", imagesArray: DramaMovies.slice(0, 4) },
        { text: "Horror", imagesArray: HorrorMovies },
      ];
      const cards = cardsData.map((data, index) => (
        <MultiImgsCard
          key={index}
          text={data.text}
          imagesArray={data.imagesArray}
          badge={false}
          pageName="moviesAndShowsPage" 
    
        />
      ));
  return (
    <div>
    <CardSlider cards={cards} slidesToShow={5} />

    </div>
  )
}

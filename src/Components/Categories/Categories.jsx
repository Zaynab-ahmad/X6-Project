import MultiImgsCard from "../Cards/MltiImgsCard/MultiImgsCard";
import CardSlider from "../Sliders/CardSlider/CardSlider";
import './Categories.css'

import {
  ActionMovies,
  AdventureMovies,
  ComedyMovies,
  DramaMovies,
  HorrorMovies,
} from "../../Data/data";
import HomeParagraph from "../SharedTitlesAndParagraph/HomeParagraph/HomeParagraph";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";

export default function Categories() {
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
      pageName="homePage" 

    />
  ));
  return (

    <div id ="Categories" className="categories xContainer customMargin">
      <div className="categoriesTxtZA">
      <HomeMoviesAndShowsTitle title="Explore our wide variety of categories" home={true} fontSizeType="type4" lineHeightType="type4"/>
      <HomeParagraph paragraph ="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"/> 
      </div>
      <CardSlider cards={cards} slidesToShow={5} />

    </div>
  );
}

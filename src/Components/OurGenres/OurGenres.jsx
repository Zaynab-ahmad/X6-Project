import "./OurGenres.css";
import MultiImgsCard from "../Cards/MltiImgsCard/MultiImgsCard";
import CardSlider from "../Sliders/CardSlider/CardSlider";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";

import {
  ActionMovies,
  AdventureMovies,
  ComedyMovies,
  DramaMovies,
  HorrorMovies,
} from "../../Data/data";

export default function OurGenres({movies, text}) {
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
      genre={movies ? "movies" : "shows"}
    />
  ));
  return (
    <div className="moviesMarginZA">
      <HomeMoviesAndShowsTitle
        title={`Our ${text} Genres`}
        home={false}
        fontSizeType="type3"
        lineHeightType="type3"
      />
     <CardSlider cards={cards} slidesToShow={5} page="moviesAndShows" sec="genres" top="type2" right={false} />
    </div>
  );
}

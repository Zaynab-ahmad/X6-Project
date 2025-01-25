import "./MustWatchShows.css";
import CardSlider from "../Sliders/CardSlider/CardSlider";
import { MustWatchShowsImages } from "../../Data/data";
import MovieShowCard from "../Cards/MovieShowCard/MovieShowCard";
import fourAndHalf from "../../assets/Icons/fourAndHalfStar.png";
import fiveStars from "../../assets/Icons/fiveStars.png";
import fourStars from "../../assets/Icons/fourStars.png";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";

export default function MustWatchShows({text}) {
   const defaultText = "";
  const cards4Data = [
    {
      length: "7h 40min",
      rating: fourAndHalf,
      source: MustWatchShowsImages[0].src,
      id: MustWatchShowsImages[0].id,
    },
    {
      length: "12h 23min",
      rating: fiveStars,
      source: MustWatchShowsImages[1].src,
      id: MustWatchShowsImages[1].id,
    },
    {
      length: "10h 30min",
      rating: fourStars,
      source: MustWatchShowsImages[2].src,
      id: MustWatchShowsImages[2].id,
    },
    {
      length: "8h 20min",
      rating: fourAndHalf,
      source: MustWatchShowsImages[3].src,
      id: MustWatchShowsImages[3].id,
    },
  ];
  const cards4 = cards4Data.map((data, index) => (
    <MovieShowCard
      id={data.id}
      length={data.length}
      views={data.views}
      src={data.source}
      key={index}
      section={"MustWatch"}
      rating={data.rating}
      ratio="MustWatch"
      genre="shows"
    />
  ));
  return (
    <div>
      <HomeMoviesAndShowsTitle
        title={`Must-Watch ${text ?? defaultText} Shows`}
        home={false}
        fontSizeType="type3"
        lineHeightType="type3"
      />
      <CardSlider
        cards={cards4}
        slidesToShow={4}
        page="moviesAndShows"
        sec="movies"
        top="type2"
        right={false}
      />
    </div>
  );
}

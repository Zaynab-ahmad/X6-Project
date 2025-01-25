import "./NewReleasedShows.css";
import CardSlider from "../Sliders/CardSlider/CardSlider";
import { NewReleasedShowsImages } from "../../Data/data";
import MovieShowCard from "../Cards/MovieShowCard/MovieShowCard";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";

export default function NewReleasedShows({text}) {
   const defaultText = "";
  const cards3Data = [
    {
      length: "12h 32min",
      seasons: "5 season",
      source: NewReleasedShowsImages[0].src,
      id: NewReleasedShowsImages[0].id,
    },
    {
      length: "7h 40min",
      seasons: "2 season",
      source: NewReleasedShowsImages[1].src,
      id: NewReleasedShowsImages[1].id,
    },
    {
      length: "8h 20min",
      seasons: "4 season",
      source: NewReleasedShowsImages[2].src,
      id: NewReleasedShowsImages[2].id,
    },
    {
      length: "10h 30min",
      seasons: "3 season",
      source: NewReleasedShowsImages[3].src,
      id: NewReleasedShowsImages[3].id,
    },
  ];
  const cards3 = cards3Data.map((data, index) => (
    <MovieShowCard
      id={data.id}
      length={data.length}
      views={data.views}
      releaseDate={data.releaseDate}
      src={data.source}
      key={index}
      section={"NewReleasedShows"}
      seasons={data.seasons}
      ratio="Shows"
      genre="shows"
    />
  ));
  return (
    <div id ="New-Release-Shows" className="moviesMarginZA">
      <HomeMoviesAndShowsTitle
        title={`New Releases ${text ?? defaultText} Shows`}
        home={false}
        fontSizeType="type3"
        lineHeightType="type3"
      />
      <CardSlider
        cards={cards3}
        slidesToShow={4}
        page="moviesAndShows"
        sec="movies"
        top="type2"
        right={false}
      />
    </div>
  );
}

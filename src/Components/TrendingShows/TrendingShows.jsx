import "./TrendingShows.css";
import CardSlider from "../Sliders/CardSlider/CardSlider";
import { TrendingShowsImages } from "../../Data/data";
import MovieShowCard from "../Cards/MovieShowCard/MovieShowCard";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";

export default function TrendingShows({text}) {
   const defaultText = "";
  const cards3Data = [
    {
      length: "8h 20min",
      seasons: "4 season",
      source: TrendingShowsImages[0].src,
      id: TrendingShowsImages[0].id,
    },
    {
      length: "12h 23min",
      seasons: "5 season",
      source: TrendingShowsImages[1].src,
      id: TrendingShowsImages[1].id,
    },
    {
      length: "14h 30min",
      seasons: "3 season",
      source: TrendingShowsImages[2].src,
      id: TrendingShowsImages[2].id,
    },
    {
      length: "7h 40min",
      seasons: "2 season",
      source: TrendingShowsImages[3].src,
      id: TrendingShowsImages[3].id,
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
    <div className="moviesMarginZA">
      <HomeMoviesAndShowsTitle
        title={`Trending ${text ?? defaultText} Shows`}
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

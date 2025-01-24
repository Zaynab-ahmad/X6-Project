import "./TrendingNow.css";
import CardSlider from "../Sliders/CardSlider/CardSlider";
import { Trendingimages } from "../../Data/data";
import MovieShowCard from "../Cards/MovieShowCard/MovieShowCard";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";

export default function TrendingNow({text}) {
  const cards2Data = [
    {
      length: "1h 30min",
      views: "2K",
      source: Trendingimages[0].src,
      id: Trendingimages[0].id,
    },
    {
      length: "1h 57min",
      views: "1.5K",
      source: Trendingimages[1].src,
      id: Trendingimages[1].id,
    },
    {
      length: "2h 10min",
      views: "1.8K",
      source: Trendingimages[2].src,
      id: Trendingimages[2].id,
    },
    {
      length: "2h 20min",
      views: "3K",
      source: Trendingimages[3].src,
      id: Trendingimages[3].id,
    },
    {
      length: "1h 42min",
      views: "5K",
      source: Trendingimages[4].src,
      id: Trendingimages[4].id,
    },
  ];
  const cards2 = cards2Data.map((data, index) => (
    <MovieShowCard
      id={data.id}
      length={data.length}
      views={data.views}
      src={data.source}
      key={index}
      section={"TrendingMovies"}
      ratio="Movies"
      genre="movies"
    />
  ));
  return (
    <div className="moviesMarginZA">
      <HomeMoviesAndShowsTitle
        title={`Trending ${text} Now`}
        home={false}
        fontSizeType="type3"
        lineHeightType="type3"
      />
      <CardSlider
        cards={cards2}
        slidesToShow={5}
        page="moviesAndShows"
        sec="movies"
        top="type2"
        right={false}
      />
    </div>
  );
}

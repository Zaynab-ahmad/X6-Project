import "./NewReleases.css";
import CardSlider from "../Sliders/CardSlider/CardSlider";
import { NewreleaseImages } from "../../Data/data";
import MovieShowCard from "../Cards/MovieShowCard/MovieShowCard";
import HomeMoviesAndShowsTitle from "../SharedTitlesAndParagraph/HomeMoviesAndShows/HomeMoviesAndShowsTitle";

export default function NewReleases({ text }) {
  const defaultText = "";
  const cards3Data = [
    {
      releaseDate: "14 April 2023",
      source: NewreleaseImages[0].src,
      id: NewreleaseImages[0].id,
    },
    {
      releaseDate: "22 April 2023",
      source: NewreleaseImages[1].src,
      id: NewreleaseImages[1].id,
    },
    {
      releaseDate: "13 April 2023",
      source: NewreleaseImages[2].src,
      id: NewreleaseImages[2].id,
    },
    {
      releaseDate: "19 April 2023",
      source: NewreleaseImages[3].src,
      id: NewreleaseImages[3].id,
    },
    {
      releaseDate: "11 April 2023",
      source: NewreleaseImages[4].src,
      id: NewreleaseImages[4].id,
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
      section={"NewReleases"}
      ratio="Movies"
      genre="movies"
    />
  ));
  return (
    <div id="New-Release" className="moviesMarginZA">
      <HomeMoviesAndShowsTitle
        title={`New Releases ${text ?? defaultText}`}
        home={false}
        fontSizeType="type3"
        lineHeightType="type3"
      />
      <CardSlider
        cards={cards3}
        slidesToShow={5}
        page="moviesAndShows"
        sec="movies"
        top="type2"
        right={false}
      />
    </div>
  );
}

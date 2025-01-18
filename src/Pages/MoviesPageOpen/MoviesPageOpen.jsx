import { useParams } from "react-router-dom";
import MoviesPageDes from "../../Components/MoviesPageDes/MoviesPageDes";
import MoviesPageCast from "../../Components/MoviesPageCast/MoviesPageCast";
import MoviesPageInfo from "../../Components/MoviesPageInfo/MoviesPageInfo";
import MoviesPageRev from "../../Components/MoviesPageRev/MoviesPageRev";
import MoviesAndShowsHero from "../../Components/Heros/MoviesAndShowsHero/MoviesAndShowsHero";
import { AllMovies } from "../../Data/data"


export default function MoviesPageOpen() {
  const { section, id } = useParams();
  const cover = AllMovies.find((movie) => movie.id === parseInt(id, 10));

  return (
    <div>
      {/* Pass the dynamic id and section */}
      <MoviesAndShowsHero src={cover.coverSrc}  videoLink={cover.videoLink} title={cover.title} description={cover.description} />
      <MoviesPageDes />
      <MoviesPageCast />
      <MoviesPageInfo />
      <MoviesPageRev />
    </div>
  );
}

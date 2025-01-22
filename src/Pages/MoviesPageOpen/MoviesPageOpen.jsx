import { useParams } from "react-router-dom";
import MoviesPageDes from "../../Components/MoviesPageDes/MoviesPageDes";
import MoviesPageCast from "../../Components/MoviesPageCast/MoviesPageCast";
import MoviesPageInfo from "../../Components/MoviesPageInfo/MoviesPageInfo";
import MoviesPageRev from "../../Components/MoviesPageRev/MoviesPageRev";
import MoviesAndShowsHero from "../../Components/Heros/MoviesAndShowsHero/MoviesAndShowsHero";
import { AllMovies } from "../../Data/data";
import "./MoviesPageOpen.css"; // Add your styles here

export default function MoviesPageOpen() {
  const { section, id } = useParams();
  const cover = AllMovies.find((movie) => movie.id === parseInt(id, 10));

  return (
    <div>
      <MoviesAndShowsHero
        src={cover.coverSrc}
        videoLink={cover.videoLink}
        title={cover.title}
        description={cover.description}
      />
      <div className="xContainer customMargin">
        <div className="bento-grid">
          {/* Episodes Section */}
          <div className="bento-item episodes">
            {/* Add your Episodes component here */}
            <h3>Episodes Section</h3>
          </div>

          {/* Description Section */}
          <div className="bento-item description">
            <MoviesPageDes des={cover.description} />
          </div>

          {/* Info Section */}
          <div className="bento-item info">
            <MoviesPageInfo />
          </div>

          {/* Cast Section */}
          <div className="bento-item cast">
            <MoviesPageCast />
          </div>

          {/* Reviews Section */}
          <div className="bento-item reviews">
            <MoviesPageRev />
          </div>
        </div>
      </div>
    </div>
  );
}

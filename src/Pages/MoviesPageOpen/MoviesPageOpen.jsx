import { useParams } from "react-router-dom";
import MoviesPageDes from "../../Components/MoviesPageDes/MoviesPageDes";
import MoviesPageCast from "../../Components/MoviesPageCast/MoviesPageCast";
import MoviesPageInfo from "../../Components/MoviesPageInfo/MoviesPageInfo";
import MoviesPageRev from "../../Components/MoviesPageRev/MoviesPageRev";
import MoviesAndShowsHero from "../../Components/Heros/MoviesAndShowsHero/MoviesAndShowsHero";
import { AllMovies } from "../../Data/data";
import "./MoviesPageOpen.css";
import Episods from "../../Components/Episods/Episods";

export default function MoviesPageOpen() {
  const { genre, id } = useParams();
  const cover = AllMovies.find((movie) => movie.id === parseInt(id, 10));

  if (!cover) {
    return <div>Movie not found</div>;
  }


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
            <div className="bentoItem episodes" style={{display: genre==="movies"? "none": "block"}} >  
              <Episods/> 
            </div>
          
          <div className="bentoItem description">
            <MoviesPageDes des={cover.description} />
          </div>

          <div className="bentoItem info">
            <MoviesPageInfo />
          </div>

          {/* Cast Section */}
          <div className="bentoItem cast">
            <MoviesPageCast />
          </div>

          {/* Reviews Section */}
          <div className="bentoItem reviews">
            <MoviesPageRev />
          </div>
        </div>
      </div>
    </div>
  );
}

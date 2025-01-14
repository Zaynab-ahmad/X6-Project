
import { useParams } from "react-router-dom";
import MoviesPageDes from "../../Components/MoviesPageDes/MoviesPageDes";
import MoviesPageCast from "../../Components/MoviesPageCast/MoviesPageCast";
import MoviesPageInfo from "../../Components/MoviesPageInfo/MoviesPageInfo";
import MoviesPageRev from "../../Components/MoviesPageRev/MoviesPageRev";

export default function MoviesPageOpen() {
  const { section, id } = useParams();
  return (
    <div>
      <MoviesPageDes/>
      <MoviesPageCast/>
      <MoviesPageInfo/>
      <MoviesPageRev/>
    </div>
  );
}


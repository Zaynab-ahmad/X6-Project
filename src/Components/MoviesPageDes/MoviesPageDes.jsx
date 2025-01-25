import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import "./MoviesPageDes.css";

export default function MoviesPageDes({ des }) {
  return (
    <div className="moviesPageDes">
      <ScrollAnimation>
        <h3 className="descriptionTit">Description</h3>
      </ScrollAnimation>
      <ScrollAnimation>
        <p className="descriptionParag">{des}</p>
      </ScrollAnimation>
    </div>
  );
}

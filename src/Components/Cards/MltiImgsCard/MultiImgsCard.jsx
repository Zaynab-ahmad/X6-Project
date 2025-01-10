import { useNavigate } from "react-router-dom";
import "./MultiImgsCard.css";
import Rightarrow from "../../../assets/icons/rightarrow.svg";

export default function MultiImgsCard({ text, imagesArray, badge, pageName, section }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (pageName === "homePage") {
      navigate("/movies-and-shows");
    }
  };

 const handleImageClick = (movie) => {
  if (pageName === "moviesAndShowsPage") {
    navigate(`/pageopen/${section || "movies"}/${movie.id}`);
  }
};



  const gapValue = badge ? "2.86%" : "1.82%";

  return (
    <div className="multiImgsCardZA" onClick={handleCardClick}>
      <div className="imageGalleryContainer">
        <div
          className="gradientOverlay"
          style={{
            width: `calc(100% + ${gapValue})`,
            height: `calc(100% + ${gapValue})`,
          }}
        ></div>
        <div
          className="imageGallery"
          style={{
            gap: gapValue,
          }}
        >
          {imagesArray.slice(0, 4).map((movie, index) => (
            <div key={index}>
              <img
                className={`multiImgsZA ${badge ? "customRatio" : "defaultRatio"}`}
                src={movie.src}
                alt={movie.alt}
                onClick={() => handleImageClick(movie)} // Correctly passing the function reference
              />
            </div>
          ))}
        </div>
      </div>
      <div className="genreZA">
        <div className="leftGenreZA">
          <span
            className="badgeZA"
            style={{ display: badge ? "block" : "none" }}
          >
            Top 10 In
          </span>
          <span
            className={`multiImgsCardTextZA ${
              badge ? "multiImgsCardTextZAWithBadge" : ""
            }`}
          >
            {text}
          </span>
        </div>

        <img src={Rightarrow} alt="Arrow" />
      </div>
    </div>
  );
}

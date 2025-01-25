import "./MoviesPageInfo.css";
import clender from "./../../assets/Icons/calendar.svg";
import languag from "./../../assets/Icons/Language.svg";
import rating from "./../../assets/Icons/ratingStar.svg";
import gerne from "./../../assets/Icons/genre.svg";
import FourRating1 from "./../../assets/Icons/fourAndHalfStar.png";
import FourRating2 from "./../../assets/Icons/fourStars.png";
import kantaraphoto from "./../../assets/Imgs/MoviesPageOpen/KantaraCast1.png";
import kanteramusic from "./../../assets/Imgs/MoviesPageOpen/KantaraMusic.png";
import Director2 from "../../assets/Imgs/ShowsPageOpen/StrangerThingsDirector.png";
import Music1 from "../../assets/Imgs/ShowsPageOpen/StrangerThingsMusic.png";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

export default function MoviesPageInfo({ genre }) {
  const languages = ["English", "Hindi", "Tamil", "Telugu", "Kannada"];
  const ratings = [
    { platform: "IMDb", rating: "4.5", icon: FourRating1 },
    { platform: "Streamvibe", rating: "4", icon: FourRating2 },
  ];
  const genres =
    genre === "movies"
      ? ["Action", "Adventure"]
      : ["Sci-Fi TV", "Teen TV Shows", "US TV Shows"];
  const director = {
    photo: genre === "movies" ? kantaraphoto : Director2,
    name: genre === "movies" ? "Rishab Shetty" : "The Duffer Brothers",
    country: genre === "movies" ? "From India" : "From USA",
  };
  const music = {
    photo: genre === "movies" ? kanteramusic : Music1,
    name: genre === "movies" ? "B. Ajaneesh Loknath" : "Kyle Dixon",
    country: genre === "movies" ? "From India" : "From USA",
  };

  return (
    <div className="moviesInfoSA openpageDevs">
      <ScrollAnimation>
        <div className="infoContentSA">
          <div className="year">
            <img className="iconClender" src={clender} alt="Calendar Icon" />
            <h6 className="openpageTitle marginZero">Released Year</h6>
          </div>
          <p className="pargraphSA">2022</p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="infoLanguageSA">
          <div className="year">
            <img className="iconClender" src={languag} alt="Language Icon" />
            <h6 className="openpageTitle marginZero">Available Languages</h6>
          </div>
          <div className="borderSA">
            {languages.map((lang, index) => (
              <div className="bordText" key={index}>
                <p className="pargraphBordeSA">{lang}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="ratingSA">
          <div className="year">
            <img className="iconClender" src={rating} alt="Rating Icon" />
            <h6 className="openpageTitle marginZero">Ratings</h6>
          </div>
          <div className="borderRating">
            {ratings.map((rate, index) => (
              <div className="borderStar" key={index}>
                <p className="pargraphSA">{rate.platform}</p>
                <div className="controlStarParagraph">
                  <img
                    className="iconStars"
                    src={rate.icon}
                    alt={`${rate.platform} rating`}
                  />
                  <p className="pargraphNumber">{rate.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation>
        <div className="gernesSA">
          <div className="year">
            <img className="iconClender" src={gerne} alt="Genre Icon" />
            <h6 className="openpageTitle marginZero">Gernes</h6>
          </div>
          <div
            className="borderSA"
            style={{ display: genre === "movies" ? "flex" : "none" }}
          >
            {genres.map(
              (item, index) =>
                genre === "movies" && (
                  <div className="bordText" key={index}>
                    <p className="pargraphBordeSA">{item}</p>
                  </div>
                )
            )}
          </div>
          <div
            className="borderSA"
            style={{ display: genre === "movies" ? "none" : "flex" }}
          >
            {genres.map(
              (item, index) =>
                genre !== "movies" && (
                  <div className="bordText" key={index}>
                    <p className="pargraphBordeSA">{item}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="director">
          <h6 className="openpageTitle marginZero year">Director</h6>
          <div className="bordLast">
            <img
              className="photoSA"
              src={director.photo}
              alt={`${director.name} photo`}
            />
            <div className="controlParagraphEnd">
              <p className="paragraphEnd">{director.name}</p>
              <p className="paragraphENdia">{director.country}</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="music">
          <h6 className="openpageTitle marginZero year">Music</h6>
          <div className="bordLast">
            <img
              className="photoSA"
              src={music.photo}
              alt={`${music.name} photo`}
            />
            <div className="controlParagraphEnd">
              <p className="paragraphEnd">{music.name}</p>
              <p className="paragraphENdia">{music.country}</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
